import React from 'react'
import OtherProjectsItem from './OtherProjectsItem';
import { OTHER_PROJECTS } from '@/data/other_projects';

const OtherProjectsSection = () => {
  return (
    <section className='otherprojects flex items-center flex-col m-[0px_auto] p-[100px_0px] max-w-[1000px]'>
       <h2 className='text-3xl font-semibold text-slate-400'> Other Noteworthy Projects</h2>
       <ul className='list-none p-0 m-[50px_0px_0px] grid gap-4 relative'>
        {OTHER_PROJECTS.map((item, i) => (
            <OtherProjectsItem key={i} title={item.title} link={item.link}
                tech={item.tech} description={item.description} />            
        ))}

       </ul>
    </section>
  )
}

export default OtherProjectsSection;