import React from 'react';
import Paragraph from './Paragraph';
import Word from './Word';
import Button from '../ui/Button';

const paragraph =
  "a Full-Stack Developer with a knack for crafting  beautiful, user-friendly interfaces. My skills lie in both front-end development and design, allowing me to bring pixel-perfect interfaces to life while ensuring they're accessible to everyone. When I'm not coding, you might find me exploring the artistic side of things as a photo-based artist. Curious to see what I create? You can check out my work";

const HeroText = () => {
  return (
    <div>
      <span id='aboutMe' className=' h-10 md:h-400 w-auto flex'></span>
      <span className='h-40 w-auto flex'></span>
      <Paragraph value={paragraph} />
      <Button
        className='left-[55vw] bg-blue mt-1 text-white rounded-[50%] w-[7rem] h-[7rem] absolute flex justify-center items-center cursor-pointer'
        backgroundColor='#F79675'
        href='https://www.negarlatifian.com'
        target='_blank'
      >
        <p className='font-sans m-0 relative z-[1] text-lg font-medium'>here</p>
      </Button>
      {/* <Word value={paragraph} /> */}
    </div>
  );
};

export default HeroText;
