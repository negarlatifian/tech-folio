import { imageSrc } from '@/constants';
import Image from 'next/image';
import './skills.scss';
import React from 'react';

const Skills = () => {
  return (
    <section className='mt-40'>
      <h1 className='font-sans text-3xl '>Skills</h1>
      <div className='flex flex-wrap gap-8 w-10/12 mt-10 justify-center mr-auto ml-auto'>
        {imageSrc.map((image) => (
          <div className='flex flex-col items-center justify-center '>
            <div className='flex justify-center border border-black rounded-full w-20 h-20 p-4'>
              <Image
                src={image.source}
                className='w-12 h-auto'
                alt={image.info}
                width={image.width}
                height={image.height}
              />
            </div>
            <div className=''>
              <h2 className='skills__info'>{image.info}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
