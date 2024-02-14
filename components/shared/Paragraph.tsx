'use client';
import { Children, useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import Word from './Word';

const Paragraph = ({ value }: { value: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');

  return (
    <p className='max-w-screen-xl p-10 flex flex-wrap leading-8' ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default Paragraph;
