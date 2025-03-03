import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import OtherProjectsSection from './OtherProjectsSection';

const Content = () => {
  return (
    <div id='main'>
        <main className='p-[0px_25px] md:p-[0px_85px] lg:p-[0px_150px] m-[0px_auto] w-full max-w-[1600px] min-h-[100vh]'>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <OtherProjectsSection />
        </main>
    </div>
  )
}

export default Content