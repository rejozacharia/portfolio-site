'use client'; // Mark component as client-side for framer-motion

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

interface Project {
  title: string;
  summary: string;
  tech?: string[]; // Optional: List technologies used
  imageUrl?: string; // Optional: Placeholder for project image/thumbnail
}

// Define highlighted projects with placeholder content
const highlightedProjects: Project[] = [
  // ... (Keep the existing highlightedProjects array definition) ...
  {
    title: "Enterprise Control Environment",
    summary: "Led the development of a sophisticated enterprise control library and associated exception case management capability in ServiceNow, enhancing governance and operational efficiency.",
    tech: ["ServiceNow", "Data Governance", "Process Automation"],
    // imageUrl: "/images/placeholder-control.png" // Example placeholder path
  },
  {
    title: "MarTech/CDP Implementation",
    summary: "Collaborated with various teams to implement key MarTech/CDP solutions (e.g., Neustar, Segment), significantly improving enterprise marketing activation, customer journey orchestration, and personalization capabilities.",
    tech: ["MarTech", "CDP", "Neustar", "Segment", "Customer Data Management"],
    // imageUrl: "/images/placeholder-martech.png" // Example placeholder path
  },
];

// Animation variants for project cards (similar to Experience)
const cardAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, // Slightly different stagger
      duration: 0.5,
    },
  }),
};

const Portfolio: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Portfolio & Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              // White card, shadow, hover effect
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Placeholder for Image */}
              <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                {project.imageUrl ? <img src={project.imageUrl} alt={project.title} className="object-cover h-full w-full"/> : <span>Project Visual</span>}
              </div>
              <div className="p-6">
                {/* Dark text */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{project.summary}</p>
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      // Light blue tags
                      <span key={t} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {/* Blue link */}
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Learn More (Details coming soon)
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;