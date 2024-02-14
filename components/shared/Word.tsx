import { MotionValue, useTransform, motion } from 'framer-motion';
import { ReactNode } from 'react';

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='font-sans mr-3 mt-3 text-[1.5rem] relative'>
      <span className='absolute opacity-30'>{children}</span>
      <motion.span className='mr-3 mt-3' style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default Word;
