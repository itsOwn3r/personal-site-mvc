"use client";
import React from 'react'
import useScreenScroll from '@/hooks/useScreenScroll';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"


const Header = () => {
  const height = useScreenScroll();

  return (
    <header style={{height: height || 100}} className='flex justify-between items-center fixed top-0 z-50 p-[0_50px] w-full bg-[#0a192fd9] cubicTransition'>
      <nav className='flex justify-between items-center relative w-full z-20'>
        <div className="logo flex justify-center items-center text-slate-300">
          <Link href="/" className='text-green-500 w-10 h-10 relative z-[1]'>
            <div className="absolute top-0 left-0 z-[-1] cubicTransition w-10 h-10 animate-spin duration5">
              <Image src="/images/Logo.png" alt='Logo' fill />
            </div>
          </Link>
        </div>

        <h2 className="hidden xl:block text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Own3r
        </h2>

        <div className="hidden md:flex items-center links">
          <ol className='flex justify-between items-center p-0 m-0 list-none'>
            <li className='m-[0px_5px] relative counter text-[13px]'>
              <Link href="#about" className='p-2.5 inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>About</Link>
            </li>
            <li className='m-[0px_5px] relative counter text-[13px]'>
              <Link href="#projects" className='p-2.5 inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>Projects</Link>
            </li>
            <li className='m-[0px_5px] relative counter text-[13px]'>
              <Link href="#contact" className='p-2.5 inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>Contact</Link>
            </li>
          </ol>

          <div className='hover:scale-105'>
            <Link className='bg-transparent text-green border border-[#64ffda] rounded-md p-[0.75rem_1rem] leading-[1] cubicTransition duration-1000 ml-[15px] text-[13px] resumeAnimation' href="#" target="_blank" rel="noopener noreferrer">Resume</Link>
          </div>
        </div>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className='cursor-pointer'><Menu className='size-8 text-white' /></SheetTrigger>
            <SheetContent className='bg-[#112240] flex justify-center items-center fixed top-0 right-0 bottom-0 p-[50px_10px] h-full'>
              <SheetHeader className='w-full'>
              <SheetTitle className='hidden'>Menu</SheetTitle>
                <SheetDescription asChild>
                  <nav className='flex justify-between items-center w-full flex-col text-slate-400 text-center mobilelinks'>

                    <ol className='p-0 m-0 list-none w-full'>
                      <li className='m-[0px_auto_10px] relative counter text-[13px]'>
                        <Link href="#about" className='p-[3px_20px_20px] w-full inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>About</Link>
                      </li>
                      <li className='m-[0px_auto_10px] relative counter text-[13px]'>
                        <Link href="#projects" className='p-[3px_20px_20px] w-full inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>Projects</Link>
                      </li>
                      <li className='m-[0px_auto_10px] relative counter text-[13px]'>
                        <Link href="#contact" className='p-[3px_20px_20px] w-full inline-block decoration-0 relative cubicTransition text-slate-300 hover:text-green'>Contact</Link>
                      </li>
                    </ol>

                    <div className='hover:scale-105 w-full'>
                      <Link className='flex justify-center items-center bg-transparent text-green border border-[#64ffda] rounded-md p-4 leading-[1] cubicTransition duration-1000 ml-[15px] text-[16px] resumeAnimation' href="#" target="_blank" rel="noopener noreferrer">Resume</Link>
                    </div>

                  </nav>
                </SheetDescription>
              </SheetHeader>
              <SheetClose className='flex items-center justify-center size-10 text-white ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none select-none rounded-full'><X className='size-10' /></SheetClose>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  )
}

export default Header