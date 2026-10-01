import { getPasscode, setPasscode, createSessionToken } from './passcodeStore.js';

export const handler = async (event) => {
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

    const oldPasscode = String(body.oldPasscode || '').trim();
    const newPasscode = String(body.newPasscode || '').trim();
    const currentPasscode = String(getPasscode()).trim();

    if (!oldPasscode || !newPasscode) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Both old passcode and new passcode are required.'
        })
      };
    }

    if (oldPasscode !== currentPasscode) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Current passcode is incorrect.'
        })
      };
    }

    if (newPasscode.length < 4) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'New passcode must be at least 4 digits.'
        })
      };
    }

    await setPasscode(newPasscode);
    const session = createSessionToken();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Passcode updated successfully.',
        token: session.token,
        expiresAt: session.expiresAt
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Failed to update passcode: ' + err.message
      })
    };
  }
};
