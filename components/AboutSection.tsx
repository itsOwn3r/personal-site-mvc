import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='about p-[100px_0px] max-w-[900px] m-[0px_auto]'>
        <h2 className='numbered-heading text-white flex items-center relative m-[10px_0px_40px] w-full whitespace-nowrap text-[32px]'> About Me</h2>
        <div className="grid grid-cols-[3fr_2fr] gap-12">
            <div>
                Hello! My name is <span className='green'>Own3r</span> and I enjoy creating Web Applications that solve problems.
                <br /><br />
                I have created a wide range of projects, from simple Chrome Extensions, Wordpress Plugins, Bash and Batch scripts to fully functional modern Web Applications with <span className='green'>Next JS</span>.
                <br /><br />

                <div className='hover:scale-105 mt-6 w-full flex justify-center'>
                    <Link className='bg-transparent text-green border border-[#64ffda] rounded-md p-[0.75rem_2rem] leading-[1.4] cubicTransition duration-1000 text-[16px] resumeAnimation' href="#projects">My Projects</Link>
                </div>
            </div>
            <div className='relative max-w-[300px]'>
                <div className="wrapper cubicTransition block relative w-full rounded-xl bg-[#64ffda] blackshadow">
                    <div className="imagewrapper">
                        <div className="block max-w-[500px]">
                            <Image className='!relative' src="/images/leo.jpg" alt='Own3r' fill />
                        </div>
                        <div className='opacitytransition' />
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default AboutSection