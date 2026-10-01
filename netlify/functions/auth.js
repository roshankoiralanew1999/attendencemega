import { getPasscode, createSessionToken } from './passcodeStore.js';

export const handler = async (event) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed' })
    };
  }

  try {
    let body = {};
    if (event.body) {
      body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    }

    const inputPasscode = String(body.passcode || '').trim();
    const currentPasscode = String(getPasscode()).trim();

    if (inputPasscode && inputPasscode === currentPasscode) {
      const session = createSessionToken();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          token: session.token,
          expiresAt: session.expiresAt
        })
      };
    }

    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Incorrect passcode. Try again.'
      })
    };
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Malformed request: ' + err.message
      })
    };
  }
};
