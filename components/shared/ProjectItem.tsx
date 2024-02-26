import React from 'react';
import CirclesRow from '../ui/CirclesRow';
import Image from 'next/image';
import Button from '../ui/Button';
import styles from './style.module.scss';

type WorkItemProps = {
  title: string;
  description: string;
  link: string;
  demo: string;
  techStack: ITechStack[];
};

interface ITechStack {
  source: string;
  info: string;
  width: number;
  height: number;
}
const ProjectItem = ({
  title,
  description,
  techStack,
  link,
  demo,
}: WorkItemProps) => {
  return (
    <section className='md:w-80 mt-8 border rounded-[20px] p-4 md:pb-2 border-black flex flex-col'>
      <CirclesRow size={6} />
      <div className='mt-4 pb-8'>
        <h2 className='font-sans'>{title}</h2>
        <div className='flex flex-col min-h-40'>
          <p className='font-ibm mt-2 min-h-32'>{description}</p>
          <ul className='flex flex-row gap-5 flex-wrap mt-5 px-4 min-h-32'>
            {techStack.map((tech, i) => {
              return (
                <li
                  key={i}
                  className='flex flex-col justify-center items-center'
                >
                  <Image
                    src={tech.source}
                    width={tech.width}
                    height={tech.height}
                    alt={tech.info}
                    className='max-h-8'
                  />
                  <p className='font-ibm text-xs'>
                    {(tech as ITechStack).info}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <Backutton link={project.link} /> */}
        <div className='h-9 w-auto flex md:flex-row gap-32 '>
          <div>
            <Button
              href={link}
              backgroundColor='#F79675'
              className={styles.Button}
            >
              <p className='font-sans'>view code</p>
            </Button>
          </div>
          <div>
            <Button
              href={demo}
              backgroundColor='#B2D7EF'
              className={styles.Button}
            >
              <p className='font-sans'>live demo</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
