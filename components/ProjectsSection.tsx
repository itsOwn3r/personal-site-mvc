import React from 'react';
import { useProjectController } from '../controllers/projectController';
import ProjectsView from '../views/ProjectsView';

const ProjectsSection: React.FC = () => {
  const { projects } = useProjectController();

  return <ProjectsView projects={projects} />;
};

export default ProjectsSection;