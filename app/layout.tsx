import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/shared/Header';

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600'],
  variable: '--font-ibm',
});
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
      <body className={`${hagrid.variable} ${ibm.variable} bg-gray`}>
        {children}
      </body>
    </html>
  );
}
