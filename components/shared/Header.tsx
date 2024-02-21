import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';
import CirclesRow from '../ui/CirclesRow';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full md:py-8 py-4'>
      <div className='wrapper flex items-center'>
        <Link href='/' className='w-36'>
          <Image
            src='/images/logo-grey.svg'
            width={50}
            height={50}
            alt='Neela Negar Latifian Logo'
            className='w-9 md:w-12'
          />
        </Link>
        <nav className='md:flex-between w-full max-w-xs flex-row'>
          <NavItems />
        </nav>
      </div>
      <CirclesRow size={6} />
    </header>
  );
};

export default Header;
