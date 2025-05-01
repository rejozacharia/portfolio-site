"use client"; // Needs client-side animation & hover effects

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface EducationItem {
  institution: string;
  location?: string;
  degree: string;
  details?: string;
  year: string;
}

const educationHistory: EducationItem[] = [
  // ... (Keep existing educationHistory array) ...
  {
    institution: "Kellogg School of Management, Northwestern University",
    location: "Chicago, IL",
    degree: "Chief Digital Officer Program",
    details: "Executive Education",
    year: "2024",
  },
  {
    institution: "Kelley School of Business, Indiana University",
    location: "Bloomington, IN",
    degree: "MBA",
    details: "Concentration in Finance, Marketing & Operations Management",
    year: "2009",
  },
  {
    institution: "College of Engineering, University of Kerala",
    location: "Trivandrum, Kerala, India",
    degree: "Bachelors in Electrical & Electronics Engineering",
    year: "2003",
  },
];

// Animation variants for cards
const cardAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

const Education: React.FC = () => {
  return (
    // Light theme: White background, light gray cards, dark text
    <section id="education" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Education
        </h2>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="card-common" // Applied common card style
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }} // Added hover scale effect
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {edu.institution}
              </h3>
              {edu.location && (
                <p className="mb-1 text-sm text-gray-500">{edu.location}</p>
              )}
              <p className="text-primary text-lg font-medium">
                {edu.degree} ({edu.year})
              </p>
              {edu.details && (
                <p className="text-md mt-1 text-gray-800">{edu.details}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#certifications"
            className="bg-primary hover:bg-primary/90 inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View My Certifications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Education;
