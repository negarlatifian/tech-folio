import { projects } from '@/constants';
import React from 'react';
import ProjectItem from '../shared/ProjectItem';
import { Interface } from 'readline';

type WorkItemProps = {
  title: string;
  description: string;
  link: string;
  demo: string;
  video?: string;
  image?: string;
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
    <section id='works' className='flex flex-col mt-20 mb-8'>
      <h1 className='font-sans md:text-3xl text-lg'>Projects</h1>
      <div className='flex flex-wrap flex-col md:flex-row gap-1 justify-around'>
        {projects.map((project: WorkItemProps, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            demo={project.demo}
            video={project.video}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
