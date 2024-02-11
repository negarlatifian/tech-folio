import React from 'react';

const Titles = () => {
  return (
    <ul className='flex flex-col w-full gap-2 md:gap-6 mt-8'>
      <li className='flex flex-col'>
        <p className='font-sans md:text-5xl text-[1.5rem] uppercase text-right'>
          creative
        </p>
        {/* <span className='w-44 border-t-2 float-end'></span> */}
      </li>
      <li className='flex flex-col overline'>
        <p className='font-sans md:text-5xl text-[1.5rem] uppercase text-right underline underline-offset-8 tracking-tight '>
          web developer
        </p>
        {/* <span className='w-44 border-t-2'></span> */}
      </li>
      <li className='flex flex-col'>
        <p className='font-sans md:text-5xl text-[1.5rem] uppercase text-right underline underline-offset-8 tracking-wider '>
          web designer
        </p>
        {/* <span className='w-44 border-t-2'></span> */}
      </li>
    </ul>
  );
};

export default Titles;
