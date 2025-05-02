"use client"; // Required for useState and onClick handlers

import React, { useState } from 'react';
import InterestSummaryCard from '@/components/InterestSummaryCard';
import InterestDetailModal from '@/components/InterestDetailModal'; // Import modal component
import { projects, ProjectData } from '@/data/projects'; // Import data and type from the new file


const InterestsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); // Clear selection when closing
  };

  return (
    <div className="container mx-auto px-4 pt-6 pb-12 bg-gray-50 min-h-screen"> {/* Reduced top padding from py-12 to pt-6 */}
      {/* General Interests Section - Removed H1 and restyled */}
      <section className="mb-4 mx-auto pt-4 pb-2 px-6"> {/* Reduced bottom margin to mb-4, reduced bottom padding to pb-2 */}
        {/* Re-added H2 "General Interests" */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">General Interests</h2>
        <hr className="my-6 border-gray-300" /> {/* Divider */}
        <ul className="list-none space-y-2 text-gray-700"> {/* Using checkmarks */}
          <li className="flex items-start">
            <span className="mr-2 text-xl">🛠️</span> {/* DIY Icon */}
            <span><span className="font-medium text-gray-800">DIY Tinkerer:</span> From speaker builds to wrangling my home server (check out the projects!).</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-xl">📚</span> {/* Reading Icon */}
            <span>Attempting to bend my brain around theoretical physics & advanced math (results may vary!).</span>
          </li>
           <li className="flex items-start">
            <span className="mr-2 text-xl">🏎️</span> {/* Racing Icon */}
            <span>Need for Speed: Catching F1 races and occasionally hitting the track myself.</span>
          </li>
           <li className="flex items-start">
            <span className="mr-2 text-xl">⚽</span> {/* Sports Icon */}
            <span>Football Fanatic: Mostly glued to the Premier League action.</span>
          </li>
        </ul>
        <hr className="my-6 border-gray-300" /> {/* Divider */}
      </section>

      {/* DIY Projects Section Title */}
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        DIY Projects Showcase
      </h2>

      {/* Grid for Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <InterestSummaryCard
            key={project.id}
            project={project} // Pass the whole project object
            // Only open modal if project doesn't have a slug (handled inside InterestSummaryCard now)
            onClick={() => !project.slug && openModal(project)}
          />
        ))}
         {/* Placeholder for adding more */}
         {projects.length === 0 && (
            <p className="text-center text-gray-500 col-span-full">No projects added yet.</p>
         )}
      </div>

       {/* Placeholder Text if needed */}
       {projects.length > 0 && (
         <div className="text-center mt-12 text-gray-500">
           <p>Click on a card to see more details or view the full project page.</p>
         </div>
       )}


      {/* Detail Modal (still needed for projects without slugs) */}
      <InterestDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default InterestsPage;