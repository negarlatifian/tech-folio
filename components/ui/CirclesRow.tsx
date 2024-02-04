import Image from 'next/image';

const CirclesRow = () => {
  return (
    <div>
      {' '}
      <ul className='flex gap-3'>
        <li>
          <Image
            src='/icons/black-circle.svg'
            width={30}
            height={30}
            alt='circle'
          />
        </li>
        <li>
          <Image
            src='/icons/blue-circle.svg'
            width={30}
            height={30}
            alt='circle'
          />
        </li>
        <li>
          <Image
            src='/icons/orange-circle.svg'
            width={30}
            height={30}
            alt='circle'
          />
        </li>
      </ul>
    </div>
  );
};

export default CirclesRow;
