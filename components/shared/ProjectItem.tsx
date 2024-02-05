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
    <section className='border rounded-full border-black flex flex-col'>
      <CirclesRow />
      <div className=''>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{stack}</p>
        {/* <Backutton link={project.link} /> */}
      </div>
    </section>
  );
};

export default ProjectItem;
