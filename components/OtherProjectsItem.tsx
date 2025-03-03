import { ExternalLink, Target } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OtherProjectsItem = ({ title, link, description, tech }: { title: string, link: string, description: string, tech: string[] }) => {
  return (
    <li className="relative list-none">
    <div className="flex justify-between flex-col items-start relative w-full h-full p-[2rem_1.75rem] rounded-lg cubicTransition overflow-auto bg-[#112240] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
        <header>
            <div className='projecttop flex justify-between items-center mb-9'>
                <div className="icon cursor-pointer text-green hover:text-white transition duration-500">
                    <Target className='size-10' />
                </div>
                <div className="projectlink flex items-center mr-[-10px] text-slate-400">
                    <Link className='flex justify-center items-center p-[5px_7px] relative hover:text-white transition duration-500' href={link} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink />
                    </Link>
                </div>
            </div>
            <h3 className='projecttitle m-[0px_0px_10px] text-slate-400 text-2xl font-semibold'>{title}</h3>
            <div className='projectdescription text-[17px] text-slate-400 m-0'>
                {description}
            </div>
        </header>

        <footer>
            <div className='flex items-end gap-x-2 flex-wrap p-0 m-[20px_0px_0px]'>
                {tech.map((item, index) => (
                    <span key={index} className='text-sm cursor-pointer text-slate-400/80 hover:text-green'>{item}</span>
                ))}
            </div>
        </footer>

    </div>
</li>
  )
}

export default OtherProjectsItem