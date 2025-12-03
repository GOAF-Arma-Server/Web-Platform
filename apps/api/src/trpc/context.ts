import type { Context as HonoContext } from 'hono';
import { auth } from '@/auth';
import { db } from '@/db';

export async function createContext(c: HonoContext) {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  return {
    db,
    session: session?.session ?? null,
    user: session?.user ?? null,
    headers: c.req.raw.headers,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
