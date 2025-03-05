import { PROJECTS } from '@/data/projects';

export interface Project {
  projectId: string;
  title: string;
  imageSrc: string;
  tech: string[];
  isFeatured: boolean;
  description: string;
  code?: string;
  demo?: string;
}

export function getProjects(): Project[] {
  return PROJECTS;
}