import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ProjectItemProps {
    isFeatured: boolean,
    title: string,
    imageSrc: string,
    description: string,
    demo?: string,
    code?: string,
    tech: string[],
    projectId: string
}

const ProjectItem = ({ isFeatured, title, imageSrc, demo, code, tech, projectId, description }: ProjectItemProps) => {
  return (
    <li className="grid relative gap-2.5 grid-cols-[repeat(12,1fr)] items-center not-last:mb-24">
        <div className="projectcontent relative z-20 rounded-xl bg-[#0a192f]">
            <div>
                {isFeatured && <p className='m-[10px_0px] green text-[13px] font-normal text-center'>
                    Featured Project
                </p>}
                <h3 className='text-white md:text-slate-400 text-[28px] leading-[1.1] font-semibold m-[0px_0px_10px] md:m-[0px_0px_20px] text-center'>
                    <Link className='relative z-10 hover:text-green' href={`/project/${projectId}`}>{title}</Link>
                </h3>
                <div className="description z-10 relative p-6 rounded-lg text-lg text-slate-400 bg-[#112240] cubicTransition">
                    <p className='m-0'>
                        {description} <br />
                        <span className='w-full block text-center'>
                            <span className='md:hidden'><Link className='text-green hover:text-green/60' href={imageSrc} target='_blank' rel='noopener noreferrer'>Screenshot</Link> - {" "}</span>
                            {demo && <Link className='text-green hover:text-green/60' href={demo} target='_blank' rel='noopener noreferrer'>Demo</Link>}
                            {code && <> - {" "}<Link className='text-green hover:text-green/60' href={code} target='_blank' rel='noopener noreferrer'>Code</Link></>}
                        </span>
                    </p>
                </div>

                <ul className="techlist flex justify-start flex-wrap relative z-10 m-[25px_0px_10px] p-0 list-none">
                    {tech?.length > 0 && tech.map((item, i) => (
                        <li key={i} className='m-[0px_0px_5px_20px] text-slate-400 whitespace-nowrap cursor-pointer hover:text-slate-200'>{item}</li>
                    ))}
                </ul>
                    </div>
        </div>

        <div className="hidden md:block image cubicTransition relative z-10 imagegrid">
            <div className="w-full max-w-[700px] h-[350px]">
                <Image src={imageSrc} alt='Next JS ticketing app' fill />
            </div>
        </div>
    </li>
  )
}

export default ProjectItem