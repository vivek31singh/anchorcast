import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { PageShell } from './components/layout/PageShell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'anchorcast - Boat Broker Autoposter',
  description: 'High-fidelity dashboard for boat-broker social media autoposter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 font-sans antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}