import React from 'react';
import Link from 'next/link';
import { Github, Instagram, Linkedin, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center flex-col h-auto min-h-16 p-4 text-center'>
        <div className='md:hidden block w-full max-w-[270px] m-[0px_auto] text-slate-400'>
            <ul className='flex items-center justify-center m-0 p-0 list-none'>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-green hover:scale-x-125' href="https://github.com/itsOwn3r" target="_blank" rel="noopener noreferrer"><Github className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-green hover:scale-x-125' href="https://www.linkedin.com/in/abdullah-a-0bb22a1b2" target="_blank" rel="noopener noreferrer"><Linkedin className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-green hover:scale-x-125' href="https://t.me/itsOwn3r" target="_blank" rel="noopener noreferrer"><Send className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-green hover:scale-x-125' href="https://www.instagram.com/itsown3r" target="_blank" rel="noopener noreferrer"><Instagram className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-green hover:scale-x-125' href="#contact"><MessageSquare className='size-5' /></Link></li>
            </ul>
        </div>


        <div className='text-slate-400 text-[12px] leading-[1]'>
            UI by <Link className='hover:text-white' href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">Brittany Chiang</Link>, Coded by <Link className='hover:text-white' href="/">Own3r</Link>. <br />
            <span className='block mt-2.5 hover:text-white'>2025</span>
        </div>
    </footer>
  )
}

export default Footer