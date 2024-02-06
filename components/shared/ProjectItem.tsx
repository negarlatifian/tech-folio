import React from 'react';
import CirclesRow from '../ui/CirclesRow';

type WorkItemProps = {
  title: string;
  description: string;
  stack: string;
  link: string;
};
const ProjectItem = ({ title, description, stack }: WorkItemProps) => {
  return (
    <section className='w-1/3 mt-8 border rounded-[20px] p-5 border-black flex flex-col'>
      <CirclesRow size={10} />
      <div className='mt-4'>
        <h2 className='font-sans'>{title}</h2>
        <p className='font-ibm mt-2'>{description}</p>
        <p className='font-ibm'>{stack}</p>
        {/* <Backutton link={project.link} /> */}
      </div>
    </section>
  );
};

export default ProjectItem;
