import { projects } from '@/constants';
import React from 'react';
import ProjectItem from '../shared/ProjectItem';
import { Interface } from 'readline';

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

const Works = () => {
  return (
    <section className='flex flex-col mt-20'>
      <h1 className='font-sans text-3xl sm:text-lg'>Projects</h1>
      <div className='flex flex-wrap gap-6 justify-around'>
        {projects.map((project: WorkItemProps) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
