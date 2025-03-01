import { Github, Instagram, Mail, MessageSquare, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideLinks = () => {
  return (
    <div className='w-10 fixed bottom-0 left-10 right-[auto] z-10 text-slate-400'>
        <ul className='flex flex-col items-center m-0 p-0 list-none sidelinks'>
            <li><Link className='p-2.5 inline-block relative decoration-0' href="https://github.com/itsOwn3r" target="_blank" rel="noreferrer"><Github className='size-5' /></Link></li>
            <li><Link className='p-2.5 inline-block relative decoration-0' href="mailto:contact@own3r.me" target="_blank" rel="noreferrer"><Mail className='size-5' /></Link></li>
            <li><Link className='p-2.5 inline-block relative decoration-0' href="https://t.me/itsOwn3r" target="_blank" rel="noreferrer"><Send className='size-5' /></Link></li>
            <li><Link className='p-2.5 inline-block relative decoration-0' href="https://www.instagram.com/itsown3r" target="_blank" rel="noreferrer"><Instagram className='size-5' /></Link></li>
            <li><Link className='p-2.5 inline-block relative decoration-0 mb-5' href="#contact"><MessageSquare className='size-5' /></Link></li>
        </ul>
    </div>
  )
}

export default SideLinks