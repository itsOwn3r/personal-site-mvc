import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import { Github, Instagram, Linkedin, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';

const spacemono = localFont({
  src: "../public/SpaceMono-Regular.ttf"
});

export const metadata: Metadata = {
  title: "Own3r's Website",
  description: "Own3r's Personal Website, Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spacemono.className} antialiased`}>

        <div id="grid">
          <div className="flex flex-col min-h-[100vh]">
            <Header />

            <SideLinks side="left">
              <ul className='flex flex-col items-center m-0 p-0 list-none sidelinks'>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-[#64ffda] hover:scale-x-125' href="https://github.com/itsOwn3r" target="_blank" rel="noreferrer"><Github className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-[#64ffda] hover:scale-x-125' href="https://www.linkedin.com/in/abdullah-a-0bb22a1b2" target="_blank" rel="noreferrer"><Linkedin className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-[#64ffda] hover:scale-x-125' href="https://t.me/itsOwn3r" target="_blank" rel="noreferrer"><Send className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-[#64ffda] hover:scale-x-125' href="https://www.instagram.com/itsown3r" target="_blank" rel="noreferrer"><Instagram className='size-5' /></Link></li>
                <li><Link className='p-2.5 inline-block relative decoration-0 hover:text-[#64ffda] hover:scale-x-125 mb-5' href="#contact"><MessageSquare className='size-5' /></Link></li>
              </ul>
            </SideLinks>

            <SideLinks side="right">
              <div className="relative flex flex-col items-center">

                <Link className='m-[20px_auto] p-2.5 relative text-xs leading-[18px] hover:text-[#64ffda] hover:scale-x-125 verticalemail'
                    href="mailto:contact@own3r.me" target="_blank" rel="noreferrer">
                      contact@own3r.me
                </Link>

                <span className="verticalemail"></span>

              </div>
            </SideLinks>

            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
