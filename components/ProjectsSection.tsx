import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProjectsSection = () => {
  return (
    <section id='projects' className='about p-[100px_0px] max-w-[900px] m-[0px_auto]'>
        <h2 className='numbered-heading text-white flex items-center relative m-[10px_0px_40px] w-full whitespace-nowrap text-[32px]'> Some of my projects</h2>
        <ul className='list-none p-0 m-0'>
            <li className="grid relative gap-2.5 grid-cols-[repeat(12,1fr)] items-center">
                <div className="projectcontent col-[7/-1] text-left relative z-20 rounded-xl bg-[#0a192f]">
                    <div>
                        <p className='m-[10px_0px] green text-[13px] font-normal'>
                            Featured Project
                        </p>
                        <h3 className='text-white md:text-slate-400 text-[28px] leading-[1.1] font-semibold m-[0px_0px_10px] md:m-[0px_0px_20px]'>
                            <Link className='relative z-10 hover:text-green' href="/project/ticketing"> Next Js Ticketing App</Link>
                        </h3>
                        <div className="description z-10 relative p-6 rounded-lg text-lg text-slate-400 bg-[#112240] cubicTransition">
                            <p className='m-0'>
                                Fully functional ticketing system with authentication, diffrent roles, uploading images, selecting department and priority, and more. <br />
                                <span className='w-full block text-center'>
                                    <Link className='text-green hover:text-green/60' href="https://ticket.own3r.me" target='_blank' rel='noopener noreferrer'>Demo</Link> - {" "}
                                    <Link className='text-green hover:text-green/60' href="https://github.com/itsOwn3r/nextjs-ticket/" target='_blank' rel='noopener noreferrer'>Code</Link>
                                    </span>
                            </p>
                        </div>
                        <ul className="techlist flex justify-start flex-wrap relative z-10 m-[25px_0px_10px] p-0 list-none">
                            <li className='m-[0px_0px_5px_20px] text-slate-400 whitespace-nowrap'>Next JS</li>
                            <li className='m-[0px_0px_5px_20px] text-slate-400 whitespace-nowrap'>Auth.js</li>
                            <li className='m-[0px_0px_5px_20px] text-slate-400 whitespace-nowrap'>Prisma</li>
                            <li className='m-[0px_0px_5px_20px] text-slate-400 whitespace-nowrap'>MondoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="image col-[1/8] cubicTransition relative z-10 imagegrid">
                    <div className="w-full max-w-[700px] h-[350px]">
                        <Image src="/images/ticket.png" alt='Next JS ticketing app' fill />
                    </div>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default ProjectsSection;