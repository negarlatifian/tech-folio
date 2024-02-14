'use client';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

const Paragraph = ({ value }: { value: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'start start'],
  });
  return (
    <motion.p
      className='text-4xl max-w-screen-xl p-10'
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
};

export default Paragraph;
