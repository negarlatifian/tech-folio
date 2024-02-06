import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './NavItems';
import CirclesRow from '../ui/CirclesRow';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full py-10'>
      <div className='wrapper flex items-center'>
        <Link href='/' className='w-36'>
          <Image
            src='/images/logo-grey.svg'
            width={50}
            height={50}
            alt='Neela Negar Latifian Logo'
          />
        </Link>
        <nav className='md:flex-between w-full max-w-xs'>
          <NavItems />
        </nav>
      </div>
      <CirclesRow size={30} />
    </header>
  );
};

export default Header;
