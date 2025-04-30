'use client'; // Mark this as a Client Component

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import components that need client-side rendering
const Expertise = dynamic(() => import('@/components/Expertise'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false });

const ClientSections: React.FC = () => {
  return (
    <>
      <Expertise />
      <Experience />
      <Portfolio />
    </>
  );
};

export default ClientSections;