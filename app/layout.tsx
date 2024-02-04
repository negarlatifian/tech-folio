import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/shared/Header';

const hagrid = localFont({
  src: [
    {
      path: '../public/Hagrid-Regular-trial.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Hagrid-Italic-trial.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/Hagrid-Text-Extrabold-trial.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/Hagrid-Text-Extrabold-Italic-trial.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-hagrid',
});

export const metadata: Metadata = {
  title: 'Neela Negar Latifian',
  description: 'Creative Frontend Developer, Full-Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${hagrid.variable}`}>{children}</body>
    </html>
  );
}
