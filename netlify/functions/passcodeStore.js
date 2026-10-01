import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

let inMemoryPasscode = null;

function getStoreFilePath() {
  // If running in AWS Lambda / Netlify, /tmp is writable
  if (process.env.NETLIFY || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return '/tmp/.passcode_store.json';
  }
  return path.resolve(process.cwd(), '.passcode_store.json');
}

export function getPasscode() {
  if (inMemoryPasscode) {
    return inMemoryPasscode;
  }
  try {
    const filePath = getStoreFilePath();
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (data && data.passcode) {
        inMemoryPasscode = String(data.passcode);
        return inMemoryPasscode;
      }
    }
  } catch (err) {
    // Ignore file read error and fall back
  }
  inMemoryPasscode = process.env.APP_PASSCODE || '1999';
  return inMemoryPasscode;
}

export async function setPasscode(newPasscode) {
  inMemoryPasscode = String(newPasscode);
  try {
    const filePath = getStoreFilePath();
    fs.writeFileSync(filePath, JSON.stringify({ passcode: inMemoryPasscode, updatedAt: new Date().toISOString() }), 'utf8');
  } catch (err) {
    console.warn('Could not persist passcode to file:', err.message);
  }

  // If PASSCODE_STORE_URL is configured, notify remote endpoint
  if (process.env.PASSCODE_STORE_URL) {
    try {
      await fetch(process.env.PASSCODE_STORE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode: inMemoryPasscode })
      });
    } catch (remoteErr) {
      console.warn('Could not post passcode to PASSCODE_STORE_URL:', remoteErr.message);
    }
  }

  return inMemoryPasscode;
}

export function getSessionSecret() {
  return process.env.SESSION_SECRET || 'it25-class-register-session-key-fallback';
}

export function createSessionToken() {
  const secret = getSessionSecret();
  const payload = {
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    iat: Date.now(),
    role: 'teacher_admin'
  };
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  return { token: `${body}.${sig}`, expiresAt: payload.exp };
}

export function verifySessionToken(token) {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [body, sig] = parts;
  const secret = getSessionSecret();
  const expectedSig = crypto.createHmac('sha256', secret).update(body).digest('base64url');
  if (sig !== expectedSig) return false;
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!payload.exp || Date.now() > payload.exp) return false;
    return payload;
  } catch {
    return false;
  }
}
