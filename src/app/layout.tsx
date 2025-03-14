import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from 'next/font/google';
import './globals.css';
import { TRPCProvider } from '@/trpc/client';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'U-Tube',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl='/'>
      <html lang='en'>
        <body className={inter.className}>
          <TRPCProvider>{children}</TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
