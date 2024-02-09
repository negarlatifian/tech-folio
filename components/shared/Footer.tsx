import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=' bg-blue w-full mt-24 px-32 '>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src='/images/logo-grey.svg'
            alt='logo'
            width={128}
            height={38}
            className='w-6'
          />
        </Link>
        <p className='font-sans'>
          2024 Neela N. Latifian. All Rights Reserved.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
