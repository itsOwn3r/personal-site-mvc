import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='hero h-auto pt-[100px] flex justify-center items-start flex-col min-h-[100vh] p-0 max-w-[1000px] m-[0px_auto]'>
    <div className='text-lg'><h1 className='green m-[0px_0px_15px_4px] text-[18px] font-medium'>Hello, I&apos;m {" "}</h1></div>
    <div className='text-lg'><h2 className='pl-4 m-0 text-[80px] font-bold text-slate-200'>Own3r.</h2></div>
    <div className='text-lg'><h3 className='mt-[5px] text-slate-400 leading-[0.9] m-0 text-[40px] md:text-[77px] font-medium whatido'>I built things for the web.</h3></div>
    <div>
        <div className='m-[20px_0px_0px] max-w-[540px]'>
            I&apos;m a <span className='green'>Front-End</span> developer specialized in JavaScript and <span className='green'>React</span> and <span className='green'>Next JS</span>. <br />
            I have expericence with a wide range of React libraries and tools, such as: <br /><br />
            <div className='w-full flex justify-between text-[16px] md:text-[17px] lg:text-xl'>
                <div>
                <span className='green'>- </span> Tailwind CSS <br />
                <span className='green'>- </span> Redux, Zustand, Recoil <br />
                <span className='green'>- </span> Framer Motion <br />
                <span className='green'>- </span> React Hook Form <br />
                <span className='green'> - </span> Zod <br />
                </div>
                <div>
                <span className='green'> - </span> Next.js <br />
                <span className='green'> - </span> SSR, CSR, SSG <br />
                <span className='green'> - </span> Auth.js <br />
                <span className='green'> - </span> Prisma <br />
                <span className='green'> - </span> React-Query <br />
                </div>
            </div>

            <div className='hover:scale-105 mt-6 w-full flex justify-center'>
                <Link className='bg-transparent text-green border border-[#64ffda] rounded-md p-[0.75rem_2rem] leading-[1.4] cubicTransition duration-1000 text-[16px] resumeAnimation' href="#" target="_blank" rel="noopener noreferrer">Resume</Link>
            </div>
        </div>
    </div> 
    <div></div>
</section>
  )
}

export default HeroSection