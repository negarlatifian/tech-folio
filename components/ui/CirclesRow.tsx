import Image from 'next/image';

const CirclesRow = ({ size }: { size: number }) => {
  return (
    <div>
      {' '}
      <ul className='flex md:gap-3 gap-2'>
        <li>
          <Image
            src='/icons/black-circle.svg'
            width={10}
            height={10}
            alt='circle'
            className={`md:w-${size} w-4`}
          />
        </li>
        <li>
          <Image
            src='/icons/blue-circle.svg'
            width={6}
            height={6}
            alt='circle'
            className={`md:w-${size} w-4`}
          />
        </li>
        <li>
          <Image
            src='/icons/orange-circle.svg'
            width={6}
            height={6}
            alt='circle'
            className={`md:w-${size} w-4`}
          />
        </li>
      </ul>
    </div>
  );
};

export default CirclesRow;
