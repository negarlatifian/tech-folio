import React from 'react';
import CirclesRow from '../ui/CirclesRow';
import Image from 'next/image';

type WorkItemProps = {
  title: string;
  description: string;
  link: string;
  techStack: ITechStack[];
};

interface ITechStack {
  source: string;
  info: string;
  width: number;
  height: number;
}
const ProjectItem = ({ title, description, techStack }: WorkItemProps) => {
  return (
    <section className='w md:w-1/3 mt-8 border rounded-[20px] p-4 md:p-5 border-black flex flex-col'>
      <CirclesRow size={10} />
      <div className='mt-4'>
        <h2 className='font-sans'>{title}</h2>
        <p className='font-ibm mt-2'>{description}</p>
        {/* <ul className='flex flex-row gap-5 flex-wrap leading-3 mb-5 mt-5'>
          {techStack.map((tech) => {
            return (
              <li key={tech.info}>
                <p className='font-ibm'>{(tech as ITechStack).info}</p>
              </li>
            );
          })}
        </ul> */}
        <ul className='flex flex-row gap-5 flex-wrap mt-5 px-4'>
          {techStack.map((tech) => {
            return (
              <li
                key={tech.info}
                className='flex flex-col justify-center items-center'
              >
                <Image
                  src={tech.source}
                  width={tech.width}
                  height={tech.height}
                  alt={tech.info}
                  className='max-h-8'
                />
                <p className='font-ibm text-xs'>{(tech as ITechStack).info}</p>
              </li>
            );
          })}
        </ul>
        {/* <Backutton link={project.link} /> */}
      </div>
    </section>
  );
};

export default ProjectItem;
