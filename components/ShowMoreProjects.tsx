"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from "react-redux";
import { appendProjects, incrementPage, setHasMore, setLoading } from "@/projectsSlice";
import { RootState } from '@/store/store';
import OtherProjectsItem from './OtherProjectsItem';


const ShowMoreProjects = () => {

    const dispatch = useDispatch();
    const { projects, page, hasMore, loading } = useSelector((state: RootState) => state.projects);


    const handleShowMore = async () => {
        dispatch(setLoading(true));
        
        const res = await fetch(`/api/projects?page=${page + 1}`);
        const data = await res.json();
        
        dispatch(appendProjects(data.projects));
        dispatch(setHasMore(data.hasMore));
        dispatch(incrementPage());
        dispatch(setLoading(false));
      };

  return (
    <>
        <ul className='list-none p-0 m-[50px_0px_0px] grid gap-4 relative'>
            {projects.map((item) => (
                <OtherProjectsItem key={item.id} title={item.title} link={item.link}
                    tech={item.tech} description={item.description} />            
            ))}
    
        </ul>

        <div className='hover:scale-115 mt-16 w-full flex justify-center'>
            <Button onClick={handleShowMore} disabled={!hasMore || loading} className='bg-transparent hover:bg-transparent cursor-pointer text-green border border-[#64ffda] rounded-md p-[1.5rem_3rem] leading-[1.6] cubicTransition duration-1000 text-[19px] resumeAnimation'>Show More</Button>
        </div>
    </>
  )
}

export default ShowMoreProjects