import { getProjects, Project } from '@/models/projectModel';

export const useProjectController = () => {
  const projects: Project[] = getProjects();

  return { projects };
};