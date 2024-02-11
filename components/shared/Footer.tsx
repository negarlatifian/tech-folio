import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=' bg-blue w-full mt-24 md:px-32 px-5 '>
      <div className=' flex flex-center justify-center wrapper p-3 gap-5 md:p-5 text-center'>
        <Link href='/'>
          <Image
            src='/images/logo-grey.svg'
            alt='logo'
            width={128}
            height={38}
            className='md:w-6 w-5 '
          />
        </Link>
        <p className='font-ibm text-sm'>
          2024 Neela N. Latifian. All Rights Reserved.{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
