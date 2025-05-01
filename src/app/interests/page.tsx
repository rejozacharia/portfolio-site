"use client"; // Required for useState and onClick handlers

import React, { useState } from 'react';
import InterestSummaryCard from '@/components/InterestSummaryCard';
import InterestDetailModal, { ProjectData } from '@/components/InterestDetailModal'; // Import modal and data type

// Define project data array
const projects: ProjectData[] = [
  {
    id: 'ebook-abridger',
    title: "Ebook Abridger",
    briefDescription: "AI-powered tool to create summarized versions of EPUB ebooks.",
    category: 'software', // Correctly placed category
    tags: ['Python', 'AI/LLM', 'LangChain', 'CLI', 'GUI', 'EPUB'], // Correctly placed tags
    description: "A Python application to generate abridged versions of EPUB ebooks using Large Language Models (LLMs). It preserves chapter structure, narrative flow, and key elements while reducing length based on user settings.",
    explanation: "The application reads an EPUB file, then uses AI (specifically, Large Language Models via LangChain) to summarize each chapter individually. It automatically detects if the book is fiction or non-fiction to adjust the summarization style. Short chapters can be skipped. Finally, it combines these summaries into a new, shorter EPUB file, preserving the original's metadata.",
    features: [
      "EPUB Input/Output (preserving metadata)",
      "AI-Powered Summarization (chapter-by-chapter + overall)",
      "Adjustable Summary Length", // Added this feature back
      "Genre Auto-detection for better summaries",
      "Option to Skip Short Chapters",
      "Error Reporting for failed chapters",
      "Cost Estimation for API usage",
      "Command-Line Interface (CLI)",
      "Graphical User Interface (GUI)",
      "Supports multiple LLM providers (Gemini, Ollama, OpenRouter)",
    ],
    githubUrl: "https://github.com/rejozacharia/ebook-abridger",
    cardImageUrl: "/images/DIY/ebook-abridger/ebook-abridger-gui.png", // Image for the summary card
    imageUrls: [ // Images for the modal detail view
      "/images/DIY/ebook-abridger/ebook-abridger-gui.png",
      "/images/DIY/ebook-abridger/ebook-abridger-complete.png",
      // Add more image paths here if needed
    ],
  },
  // --- Add more project objects here ---
  // Example placeholder:
  // {
  //   id: 'another-project',
  //   title: "Another Cool Project",
  //   briefDescription: "Brief description for the card.",
  //   category: 'hardware',
  //   tags: ['Raspberry Pi', 'Sensors', 'IoT'],
  //   description: "Full description for the modal.",
  //   explanation: "How this other project works.",
  //   features: ["Feature A", "Feature B"],
  //   githubUrl: "https://github.com/your-username/another-project",
  //   cardImageUrl: "/images/another-project-preview.png",
  //   imageUrls: ["/images/another-project-1.png", "/images/another-project-2.png"]
  // },
];


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
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
        DIY Projects & Interests
      </h1>

      {/* Grid for Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <InterestSummaryCard
            key={project.id}
            project={project} // Pass the whole project object
            onClick={() => openModal(project)}
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
           <p>Click on a card to see more details.</p>
         </div>
       )}


      {/* Detail Modal */}
      <InterestDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default InterestsPage;