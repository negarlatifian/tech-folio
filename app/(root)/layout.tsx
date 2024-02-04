import Header from '@/components/shared/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col bg-gray px-32'>
      <Header />
      <main className='flex-1'>{children}</main>
    </div>
  );
}
