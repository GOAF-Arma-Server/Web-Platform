import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { auth } from '@/auth';
import { createContext } from '@/trpc/context';
import { appRouter } from '@/trpc/router';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use(
  '*',
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
    credentials: true,
  })
);

// Health check
app.get('/', (c) => c.json({ status: 'ok', service: 'goaf-api' }));

// Better Auth routes
app.on(['GET', 'POST'], '/api/auth/*', (c) => auth.handler(c.req.raw));

// tRPC routes
app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
    createContext: ({ req }) => {
      // Create a minimal Hono context for tRPC
      const c = {
        req: {
          raw: req,
        },
      } as Parameters<typeof createContext>[0];
      return createContext(c);
    },
  })
);

export { app };
export type { AppRouter } from '@/trpc/router';
