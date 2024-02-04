import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const hagrid = localFont({
  src: [
    {
      path: 'fonts/Hagrid-Regular-trial.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Hagrid-Italic-trial.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/Hagrid-Text-Extrabold-trial.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: 'fonts/Hagrid-Text-Extrabold-Italic-trial.ttf',
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
      <body className={hagrid.className}>{children}</body>
    </html>
  );
}
