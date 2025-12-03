import type { AppRouter } from '@repo/api/trpc';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

// Server-side tRPC client (for use in Server Components, Server Actions, etc.)
export function createServerClient(options?: { headers?: HeadersInit }) {
  const apiUrl = process.env.API_URL || 'http://localhost:3004';

  return createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `${apiUrl}/trpc`,
        transformer: superjson,
        headers() {
          return {
            'Content-Type': 'application/json',
            ...options?.headers,
          };
        },
      }),
    ],
  });
}

// Helper to forward cookies from the request to the API
export function createServerClientWithCookies(cookieHeader: string | null) {
  return createServerClient({
    headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
  });
}
