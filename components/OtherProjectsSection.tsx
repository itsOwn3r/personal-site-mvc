'use client';
import React from 'react';
import { useOtherProjectController } from '@/controllers/otherProjectController';
import OtherProjectsView from '@/views/OtherProjectsView';

const OtherProjectsSection = () => {
  useOtherProjectController();

  return <OtherProjectsView />;
};

export default OtherProjectsSection;