'use client';
import React from 'react';
import ShowMoreProjects from '@/components/ShowMoreProjects';


const OtherProjectsView = () => {
  return (
    <section className="otherprojects flex items-center flex-col m-[0px_auto] p-[100px_0px] max-w-[1000px]">
      <h2 className="text-3xl font-semibold text-slate-400">
        Other Noteworthy Projects
      </h2>
      <ShowMoreProjects />
    </section>
  );
};

export default OtherProjectsView;