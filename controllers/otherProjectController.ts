'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHasMore, setProjects } from '@/projectsSlice'; // Assuming you have an interface for Project
import { fetchProjectsFromApi } from '@/models/otherProjectModel';

export const useOtherProjectController = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProjects = async () => {
      const { projects, hasMore } = await fetchProjectsFromApi();
      dispatch(setProjects(projects));
      dispatch(setHasMore(hasMore));
    };

    loadProjects();
  }, [dispatch]);

  return {};
};