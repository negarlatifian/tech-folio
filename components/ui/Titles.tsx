import { motion } from 'framer-motion';

const Titles = () => {
  return (
    <ul className='flex flex-col w-full gap-2 md:gap-6 mt-8 items-end'>
      <motion.li className='flex flex-col border-black border-b-[3px] md:border-b-4 w-[13rem] md:w-[24rem] overflow-hidden pb-1 md:pb-3'>
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className='font-sans md:text-[2.8rem] leading-10 text-[1.5rem] uppercase text-right'>
            creative
          </p>
        </motion.div>
      </motion.li>
      <motion.li className='flex flex-col border-black border-b-[3px] md:border-b-4 w-[13rem] md:w-[24rem] overflow-hidden pb-1 md:pb-3'>
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className='font-sans md:text-[2.8rem] leading-10 text-[1.5rem] text-right uppercase tracking-tight '>
            web developer
          </p>
        </motion.div>
      </motion.li>
      <motion.li className='flex flex-col border-black border-b-[3px] md:border-b-4 w-[13rem] md:w-[24rem] overflow-hidden pb-1 md:pb-3'>
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className='font-sans md:text-[2.75rem] leading-10 text-[1.5rem] text-right uppercase tracking-wider '>
            web designer
          </p>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default Titles;
