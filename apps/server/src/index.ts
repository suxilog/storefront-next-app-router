// middleware.js
import { createServer } from '@vue-storefront/middleware';
import cors from 'cors';
import config from '../middleware.config.js';

(async () => {
  const app = await createServer({ integrations: config.integrations });
  const host = process.argv[2] ?? '0.0.0.0';
  const port = process.argv[3] ?? 8181;
  const CORS_MIDDLEWARE_NAME = 'corsMiddleware';

  const corsMiddleware = app._router.stack.find(
    (middleware: { name: string }) => middleware.name === CORS_MIDDLEWARE_NAME,
  );

  corsMiddleware.handle = cors({
    origin: ['http://localhost:3000', ...(process.env.MIDDLEWARE_ALLOWED_ORIGINS?.split(',') ?? [])],
    credentials: true,
  });

  app.listen(Number(port), host, () => {
    // console.log(`Middleware started: ${host}:${port}`);
    const url = `https://${host}:${port}`;
  });
})();
