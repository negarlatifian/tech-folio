import Image from 'next/image';

const CirclesRow = ({ size }: { size: number }) => {
  return (
    <div>
      {' '}
      <ul className='flex md:gap-3 gap-2'>
        <li>
          <Image
            src='/icons/black-circle.svg'
            width={size}
            height={size}
            alt='circle'
            className='md:w-8 w-3'
          />
        </li>
        <li>
          <Image
            src='/icons/blue-circle.svg'
            width={size}
            height={size}
            alt='circle'
            className='md:w-8 w-3'
          />
        </li>
        <li>
          <Image
            src='/icons/orange-circle.svg'
            width={size}
            height={size}
            alt='circle'
            className='md:w-8 w-3'
          />
        </li>
      </ul>
    </div>
  );
};

export default CirclesRow;
