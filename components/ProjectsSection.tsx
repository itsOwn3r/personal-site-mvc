
import React from 'react'
import ProjectItem from './ProjectItem';

const PROJECTS = [
    {
        title: 'Next JS Ticketing',
        imageSrc: '/images/ticket.png',
        isFeatured: true,
        tech: ["NextJS", "Auth.js", "Prisma", "MondoDB"],
        description: "Fully functional ticketing system with authentication, diffrent roles, uploading images, selecting department and priority, and more.",
        projectId: "ticket",
        code: 'https://github.com/itsOwn3r/nextjs-ticket/',
        demo: 'https://ticket.own3r.me/'
    },
    {
        title: 'Multi-vendor Digital Products Sore',
        imageSrc: '/images/mytg.png',
        isFeatured: true,
        description: "A multi-vendor digital products store with multi-step authentication, , Admin panel, Blog, and Automated handling sales, fees, sending reports and ...",
        projectId: "mytg",
        tech: ["NextJS", "Auth.js", "Shad CN", "Zustand"],
        demo: 'https://mytg.ir'
    },
    {
        title: 'Clipboard',
        imageSrc: '/images/clipboard.jpg',
        isFeatured: true,
        description:"Clipboard Share with a Web App, Chrome Extention and Telegram bot",
        projectId: "clipboard",
        tech: ["Chrome Extention", "Telegram Bot", "Node JS", "QR Code"]
    },
    {
        title: 'Meme Finder',
        imageSrc: '/images/mem-finder.png',
        isFeatured: true,
        tech: ["NextJS", "Gemini", "Prisma", "MondoDB"],
        description: "Meme Finder with automated importing pics from Threads.net and captioning them + inline Telegram bot to send Memes in Telegram",
        projectId: "meme",
        code: 'https://github.com/itsOwn3r/meme-finder',
        demo: 'https://meme.own3r.me/'
    },
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='about p-[100px_0px] max-w-[900px] m-[0px_auto]'>
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