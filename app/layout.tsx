import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

import { AuthProvider } from '@/features/auth/hooks/use-auth';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'auth rent',
  description: 'Car rental management system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <AuthProvider>
        <body className={`${dmSans.className} antialiased`}>
          <div className='min-h-screen'>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
