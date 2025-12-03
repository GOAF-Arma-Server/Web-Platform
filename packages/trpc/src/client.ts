import type { AppRouter } from '@repo/api/trpc';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

export function createClient(baseUrl: string) {
  return createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `${baseUrl}/trpc`,
        transformer: superjson,
        headers() {
          return {
            'Content-Type': 'application/json',
          };
        },
        fetch(url, options) {
          return fetch(url, {
            ...options,
            credentials: 'include', // Important for auth cookies
          });
        },
      }),
    ],
  });
}

// Default client for browser
export const trpc = createClient(
  typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004' : ''
);
