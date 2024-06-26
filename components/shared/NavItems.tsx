'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className='md:flex-between flex w-full md:flex-row items-start gap-2 md:gap-5'>
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-orange underline'
            } font-sans flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} className='text-sm md:text-lg'>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
