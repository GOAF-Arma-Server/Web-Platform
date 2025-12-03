import 'dotenv/config';
import { serve } from '@hono/node-server';
import { app } from './server';

const port = Number(process.env.PORT) || 3004;

console.log(`
🎖️  GOAF API Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Server:    http://localhost:${port}
🔌 tRPC:      http://localhost:${port}/trpc
🔐 Auth:      http://localhost:${port}/api/auth
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

serve({
  fetch: app.fetch,
  port,
});
