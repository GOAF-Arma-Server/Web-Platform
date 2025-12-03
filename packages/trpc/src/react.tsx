'use client';

import type { AppRouter } from '@repo/api/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { useState } from 'react';
import superjson from 'superjson';

// Create the tRPC React hooks
export const trpc = createTRPCReact<AppRouter>();

// Helper to get the API URL
function getApiUrl() {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3004';
  }
  return process.env.API_URL || 'http://localhost:3004';
}

// Provider component
export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000, // 5 seconds
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getApiUrl()}/trpc`,
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
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

// Export React Query hooks for direct use
export { useQueryClient } from '@tanstack/react-query';
