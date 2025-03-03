
import React from 'react'
import ProjectItem from './ProjectItem';
import { PROJECTS } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id='projects' className='p-[100px_0px] max-w-[1000px] m-[0px_auto]'>
        <h2 className='numbered-heading text-white flex items-center relative m-[10px_0px_40px] w-full whitespace-nowrap text-[32px]'> Some of my projects</h2>
        <ul className='list-none p-0 m-0'>
            {PROJECTS.map((project) => (
                <ProjectItem key={project.projectId} title={project.title} imageSrc={project.imageSrc}
                    tech={project.tech} isFeatured projectId={project.projectId}
                    description={project.description} code={project.code} demo={project.demo} />                
            ))}

        </ul>
    </section>
  )
}

export default ProjectsSection;