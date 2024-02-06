import { projects } from '@/constants';
import React from 'react';
import ProjectItem from '../shared/ProjectItem';
type WorkItemProps = {
  title: string;
  description: string;
  stack: string;
  link: string;
};

const Works = () => {
  return (
    <section className='flex flex-col'>
      <h1 className='font-sans text-3xl'>Projects</h1>
      <div className='flex flex-wrap gap-6 justify-around'>
        {projects.map((project: WorkItemProps) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
