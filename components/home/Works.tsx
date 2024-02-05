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
    <section className='projects'>
      <h1>Projects</h1>
      <div className='projects__container'>
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
