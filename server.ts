import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handler as authHandler } from './netlify/functions/auth.js';
import { handler as resetPasswordHandler } from './netlify/functions/reset-password.js';
import { handler as sheetsHandler } from './netlify/functions/sheets.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text({ type: 'text/*' }));

// Adapter to route Express requests through Netlify serverless handlers
const adaptNetlifyHandler = (handler: any) => async (req: express.Request, res: express.Response) => {
  try {
    const event = {
      httpMethod: req.method,
      headers: req.headers as Record<string, string>,
      queryStringParameters: (req.query as Record<string, string>) || {},
      body: req.body ? (typeof req.body === 'string' ? req.body : JSON.stringify(req.body)) : null,
      path: req.path
    };

    const result = await handler(event, {});

    if (result.headers) {
      for (const [key, value] of Object.entries(result.headers)) {
        res.setHeader(key, value as string);
      }
    }

    res.status(result.statusCode || 200).send(result.body);
  } catch (err: any) {
    console.error(`Error in endpoint ${req.path}:`, err);
    res.status(500).json({ ok: false, error: err.message || 'Internal Server Error' });
  }
};

// Internal API routes
app.all('/api/auth', adaptNetlifyHandler(authHandler));
app.all('/.netlify/functions/auth', adaptNetlifyHandler(authHandler));

app.all('/api/reset-password', adaptNetlifyHandler(resetPasswordHandler));
app.all('/.netlify/functions/reset-password', adaptNetlifyHandler(resetPasswordHandler));

app.all('/api/sheets', adaptNetlifyHandler(sheetsHandler));
app.all('/.netlify/functions/sheets', adaptNetlifyHandler(sheetsHandler));

// Serve static frontend assets from public/
const publicDir = path.resolve(__dirname, 'public');
app.use(express.static(publicDir));

// Fallback to public/index.html for any SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Class Register server running on port ${PORT}`);
  console.log(`Local preview: http://localhost:${PORT}`);
});
