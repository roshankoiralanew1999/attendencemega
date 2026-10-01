import { verifySessionToken } from './passcodeStore.js';

// Fallback in-memory store for classes/sections where Google Script URL has not been configured yet
const mockClassStore = {
  attendance: {},
  assignments: {}
};

function getScriptUrl(classKey, section, mode) {
  const cKey = String(classKey || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const sec = String(section || '').toUpperCase().trim();
  const m = String(mode || '').toLowerCase();

  const DEFAULT_CSIT_A1_ATT = "https://script.google.com/macros/s/AKfycbz3WvTIHJS8ugTDhMAFyqh9Ksnc3u-HRQX7qH6iG75Fk5B51K--xYJqvEKeLCSE3wVh/exec";
  const DEFAULT_CSIT_A2_ATT = "https://script.google.com/macros/s/AKfycbzv9Ei1yBHx_NAHxZB8YLhS293ylH5m4awlPDvuXEBjx4QHi7IZpHvKnWaPn_q-XKQCnw/exec";
  const DEFAULT_CSIT_A1_ASSIGN = "https://script.google.com/macros/s/AKfycbyK0GawIatsps0SM0lD7MfCY_PT3eJ8sf7WQQpvcGA8pJNo48V_sztdi0hQ5a7RXQIuBQ/exec";
  const DEFAULT_CSIT_A2_ASSIGN = "https://script.google.com/macros/s/AKfycbyq5MDgXJtxMjdRXJk4ZyO0DerZCyRtj3nyackl_2nBjYh-FqdlAYRvjDuQqzTgTPGI/exec";

  if (cKey.includes('csit')) {
    if (m === 'attendance') {
      if (sec === 'A2') {
        return process.env.API_CSIT_ATT_A2 || DEFAULT_CSIT_A2_ATT;
      }
      return process.env.API_CSIT_ATT_A1 || process.env.API_CSIT_ATT || DEFAULT_CSIT_A1_ATT;
    } else {
      if (sec === 'A2') {
        return process.env.API_CSIT_ASSIGN_A2 || DEFAULT_CSIT_A2_ASSIGN;
      }
      return process.env.API_CSIT_ASSIGN_A1 || process.env.API_CSIT_ASSIGN || DEFAULT_CSIT_A1_ASSIGN;
    }
  }

  if (cKey.includes('bca')) {
    if (m === 'attendance') {
      return process.env.API_BCA_ATT || '';
    } else {
      return process.env.API_BCA_ASSIGN || '';
    }
  }

  if (cKey.includes('xi') || cKey.includes('11')) {
    if (m === 'attendance') {
      return process.env.API_XI_ATT || process.env[`API_XI_ATT_${sec}`] || '';
    } else {
      return process.env.API_XI_ASSIGN || process.env[`API_XI_ASSIGN_${sec}`] || '';
    }
  }

  return '';
}

function handleMockFallback(classKey, section, mode, method, query, body) {
  const storeKey = `${classKey}_${section}_${mode}`;

  if (mode === 'attendance') {
    if (!mockClassStore.attendance[storeKey]) {
      mockClassStore.attendance[storeKey] = { lastDay: 0, records: [] };
    }
    const store = mockClassStore.attendance[storeKey];

    if (method === 'GET') {
      return {
        statusCode: 200,
        body: { ok: true, lastDay: store.lastDay, isSimulated: true }
      };
    } else if (method === 'POST') {
      const targetDay = Number(body.targetDay) || (store.lastDay + 1);
      store.lastDay = Math.max(store.lastDay, targetDay);
      store.records.push({
        targetDay,
        attendance: body.attendance || [],
        comment: body.comment || '',
        timestamp: new Date().toISOString()
      });
      return {
        statusCode: 200,
        body: { ok: true, success: true, savedDay: targetDay, isSimulated: true }
      };
    }
  } else {
    // assignments
    if (!mockClassStore.assignments[storeKey]) {
      mockClassStore.assignments[storeKey] = {};
    }
    const store = mockClassStore.assignments[storeKey];

    if (method === 'GET') {
      const roll = Number(query.roll || 1);
      const studentData = store[roll] || {
        marks: Array(8).fill(null),
        notes: Array(8).fill('')
      };
      return {
        statusCode: 200,
        body: {
          ok: true,
          roll,
          marks: studentData.marks,
          notes: studentData.notes,
          isSimulated: true
        }
      };
    } else if (method === 'POST') {
      const roll = Number(body.roll || 1);
      if (!store[roll]) {
        store[roll] = {
          marks: Array(8).fill(null),
          notes: Array(8).fill('')
        };
      }
      if (Array.isArray(body.updates)) {
        body.updates.forEach(u => {
          const idx = (Number(u.index) || 1) - 1;
          if (idx >= 0 && idx < 8) {
            store[roll].marks[idx] = (u.mark === '' || u.mark === null) ? null : Number(u.mark);
            store[roll].notes[idx] = u.note || '';
          }
        });
      }
      return {
        statusCode: 200,
        body: { ok: true, success: true, isSimulated: true }
      };
    }
  }

  return { statusCode: 200, body: { ok: true, isSimulated: true } };
}

export const handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // 1. Authenticate Request
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ ok: false, error: 'Unauthorized: Missing or invalid token' })
    };
  }

  const token = authHeader.replace(/^Bearer\s+/, '').trim();
  const session = verifySessionToken(token);
  if (!session) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ ok: false, error: 'Unauthorized: Session expired or invalid' })
    };
  }

  try {
    const query = event.queryStringParameters || {};
    let body = {};
    if (event.body) {
      body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    }

    const classKey = query.classKey || body.classKey || 'csit';
    const section = query.section || body.section || 'A1';
    const mode = query.mode || body.mode || 'attendance';

    const targetUrl = getScriptUrl(classKey, section, mode);

    // If no real Google Apps Script URL is configured yet for this class/section (e.g. placeholder Api3a/Api3b), use simulated store
    const isRealUrl = targetUrl && (targetUrl.startsWith('https://') || targetUrl.startsWith('http://'));
    if (!isRealUrl) {
      const mockResult = handleMockFallback(classKey, section, mode, event.httpMethod, query, body);
      return {
        statusCode: mockResult.statusCode,
        headers,
        body: JSON.stringify(mockResult.body)
      };
    }

    // Forward to private Google Apps Script
    if (event.httpMethod === 'GET') {
      const urlObj = new URL(targetUrl);
      for (const [key, value] of Object.entries(query)) {
        if (!['classKey', 'mode'].includes(key)) {
          urlObj.searchParams.set(key, String(value));
        }
      }
      // Explicitly guarantee section is included for multi-section sheets
      if (section && !urlObj.searchParams.has('section')) {
        urlObj.searchParams.set('section', section);
      }
      // Add cache buster
      if (!urlObj.searchParams.has('t')) {
        urlObj.searchParams.set('t', String(Date.now()));
      }

      const response = await fetch(urlObj.toString(), {
        method: 'GET',
        redirect: 'follow'
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { ok: true, raw: responseText };
      }

      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(responseData)
      };
    } else if (event.httpMethod === 'POST') {
      // Clean body to forward to Google Apps Script
      const payload = { ...body };
      delete payload.classKey;
      // Explicitly ensure section tab is provided
      if (section) {
        payload.section = section;
      }

      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload),
        redirect: 'follow'
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { ok: true, raw: responseText };
      }

      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(responseData)
      };
    } else {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ ok: false, error: 'Method Not Allowed' })
      };
    }
  } catch (err) {
    console.error('Sheets proxy error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        ok: false,
        error: 'Proxy Error: ' + err.message
      })
    };
  }
};
