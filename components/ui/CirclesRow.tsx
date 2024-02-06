import Image from 'next/image';

const CirclesRow = ({ size }: { size: number }) => {
  return (
    <div>
      {' '}
      <ul className='flex gap-3'>
        <li>
          <Image
            src='/icons/black-circle.svg'
            width={size}
            height={size}
            alt='circle'
          />
        </li>
        <li>
          <Image
            src='/icons/blue-circle.svg'
            width={size}
            height={size}
            alt='circle'
          />
        </li>
        <li>
          <Image
            src='/icons/orange-circle.svg'
            width={size}
            height={size}
            alt='circle'
          />
        </li>
      </ul>
    </div>
  );
};

export default CirclesRow;
