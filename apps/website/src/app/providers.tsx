'use client';

import { TRPCProvider } from '@repo/trpc/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type * as React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
        {children}
      </NextThemesProvider>
    </TRPCProvider>
  );
}
