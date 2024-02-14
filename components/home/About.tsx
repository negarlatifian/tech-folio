'use client';
import Image from 'next/image';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { AnimatedText } from '../shared/AnimatedText';
import HeroText from '../shared/HeroText';

const About = () => {
  const text = `Hi!  I’m Neela. 
  a Full-Stack Developer with a knack for crafting  beautiful, user-friendly interfaces. My skills lie in both front-end development and design, allowing me to bring pixel-perfect interfaces to life while ensuring they're accessible to everyone. When I'm not coding, you might find me exploring the artistic side of things as a photo-based artist.
  Curious to see what I create? You can check out my work here`;
  const textSplit = text.split(' ');
  return (
    <section id='about' className='mt-80 '>
      <div className='ml-[-12rem]'>
        <Image
          src='/images/image-group.png'
          width={1113}
          height={350}
          alt='profile photo'
          className='scale-90'
        />
      </div>

      <div>
        {/* <AnimatedText
          once
          el='h1'
          text={[
            'Hi!  I’m Neela.',
            'a Full-Stack Developer with a knack for crafting  beautiful, user-friendly interfaces.',
            "My skills lie in both front-end development and design, allowing me to bring pixel-perfect interfaces to life while ensuring they're accessible to everyone.",
            "When I'm not coding, you might find me exploring the artistic side of things as a photo-based artist.",
            'Curious to see what I create? You can check out my work here',
          ]}
          className='text-2xl font-ibm leading-relaxed'
        /> */}
        <HeroText />
      </div>
    </section>
  );
};

export default About;
