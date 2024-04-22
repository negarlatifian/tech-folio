'use client';
import Image from 'next/image';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { AnimatedText } from '../shared/AnimatedText';
import HeroText from '../shared/HeroText';
import Button from '../ui/Button';
import styles from './style.module.scss';
import styles2 from '../ui/style.module.scss';

const About = () => {
  const text = `I’m Neela. 
  a Full-Stack Developer with a knack for crafting  beautiful, user-friendly interfaces. My skills lie in both front-end development and design, allowing me to bring pixel-perfect interfaces to life while ensuring they're accessible to everyone. When I'm not coding, you might find me exploring the artistic side of things as a photo-based artist.
  Curious to see what I create? You can check out my work here`;
  const textSplit = text.split(' ');
  return (
    <section id='about' className='mt-[-15rem] '>
      <div className='relative h-screen'></div>
      <div className='ml-[-12rem] h-[20vh] sm:h-[60vh] md:h-[100vh]'>
        <Image
          src='/images/image-group.png'
          width={1113}
          height={350}
          alt='profile photo'
          className='md:scale-90 scale-110'
        />
        <AnimatedText
          once
          el='h1'
          text={[`Hi!  I’m Neela!`]}
          className='font-sans text-[2rem] max-w-screen-xl text-black mt-10 ml-28 flex items-center justify-center'
        />
        <Button
          className={styles.Button}
          backgroundColor='#F79675'
          href='#aboutMe'
          target='_self'
        >
          <p className='font-sans'>About Me</p>
        </Button>
      </div>

      <div className=''>
        <HeroText />
      </div>
    </section>
  );
};

export default About;
