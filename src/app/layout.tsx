import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jose Garcia Becerra - Web Developer',
  description:
    'Explore the portfolio of Jose Garcia Becerra, a professional web developer. Discover a range of projects and gain insight into my extensive work experience in the tech industry.',
  keywords:
    'Jose Garcia Becerra, Web Developer, Portfolio, Tech Projects, Work Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='h-full'>
      <body className={`${inter.className} h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
