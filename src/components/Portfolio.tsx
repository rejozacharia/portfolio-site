"use client"; // Mark component as client-side for framer-motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

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
    summary:
      "Led the development of a sophisticated enterprise control library and associated exception case management capability in ServiceNow, enhancing governance and operational efficiency.",
    tech: ["ServiceNow", "Data Governance", "Process Automation"],
    // imageUrl: "/images/placeholder-control.png" // Example placeholder path
  },
  {
    title: "MarTech/CDP Implementation",
    summary:
      "Collaborated with various teams to implement key MarTech/CDP solutions (e.g., Neustar, Segment), significantly improving enterprise marketing activation, customer journey orchestration, and personalization capabilities.",
    tech: ["MarTech", "CDP", "Neustar", "Segment", "Customer Data Management"],
    //imageUrl: "/images/placeholder-martech.png" // Example placeholder path
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
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Portfolio & Key Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg" // Added overflow-hidden
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }} // Added hover scale effect
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
            >
              {/* Image Container with hover effect */}
              <div className="group relative h-48 overflow-hidden bg-gray-300">
                {" "}
                {/* Added group and relative */}
                <div className="flex h-full w-full items-center justify-center text-gray-500">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect
                    />
                  ) : (
                    <span>Project Visual</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                {/* Dark text */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-700">{project.summary}</p>
                {project.tech && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      // Light blue tags
                      <span
                        key={t}
                        className="rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {/* Blue link */}
                <Link
                  href="/blog"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Learn More (go to Blog)
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#education"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Education
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
