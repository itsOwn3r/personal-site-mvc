"use client";
import React from 'react'
import { Project, setHasMore, setProjects } from '@/projectsSlice';
import { store } from '@/store/store';
import ShowMoreProjects from './ShowMoreProjects';
import { useEffect } from 'react';

async function fetchProjects(): Promise<{ projects: Project[], hasMore: boolean }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects?page=1`);
  const data = await res.json();
  return data;
}

const OtherProjectsSection = () => {
  useEffect(() => {
    const getProjects = async () => {
      const { projects, hasMore } = await fetchProjects();
      store.dispatch(setProjects(projects));
      store.dispatch(setHasMore(hasMore));
    };

    getProjects();
  }, []);

  return (
    <section className='otherprojects flex items-center flex-col m-[0px_auto] p-[100px_0px] max-w-[1000px]'>
       <h2 className='text-3xl font-semibold text-slate-400'> Other Noteworthy Projects</h2>


        <ShowMoreProjects />

    </section>
  )
}

export default OtherProjectsSection;