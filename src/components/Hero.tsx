"use client"; // Make this a Client Component to use framer-motion

import Image from 'next/image';
import React, { useState } from "react"; // Import useState
import { motion } from "framer-motion"; // Import motion

// Define animation variants (copied from ClientSections for consistency)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <motion.div // Wrap the section with motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Light theme: Very light gray background, dark text, blue accents */}
      <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-gray-50 py-20"
    >
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
        {/* Text Content */}
        <div className="text-center md:w-1/2 md:text-left">
          {/* Consistent H1 size (md and up) */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Rejo Z Mathew
          </h1>
          <h2 className="text-primary mb-6 text-2xl font-semibold md:text-3xl">
            AI & Data Strategy Leader in Financial Services
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Bridging advanced technology and business strategy to drive
            innovation and ROI in the financial sector.
          </p>
          {/* Buttons with blue accent */}
          <div className="flex justify-center gap-4 md:justify-start">
            {/* Video Intro Button */}
            <button
              onClick={openVideoModal}
              className="btn-primary rounded px-4 py-2 font-bold text-white shadow transition duration-300 cursor-pointer"
            >
              View Video Intro
            </button>
            {/* Contact Button */}
            <a
              href="#contact"
              className="rounded bg-gray-700 px-4 py-2 font-bold text-white shadow transition duration-300 hover:bg-gray-800"
            >
              Contact Me
            </a>
            {/* Resume Link */}
            <a
              href="/Rejo_Z_Mathew_Resume.pdf" // Placeholder path - ensure the resume file exists here
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              className="rounded border border-primary px-4 py-2 font-bold text-primary shadow transition duration-300 hover:bg-primary/10"
              download // Suggest download, though browser behavior might vary
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex justify-center md:w-1/2">
          {/* Profile Image */}
          <Image
            src="/profile_pic.jpg" // Assumes image is moved to public/profile_pic.jpg
            alt="Rejo Z Mathew - Profile Picture"
            width={400} // Adjust width as needed
            height={400} // Adjust height as needed
            className="rounded-full shadow-lg"
            priority // Load image priority
          />
        </div>
      </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative w-full max-w-3xl rounded-lg bg-white p-4 shadow-xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              aria-label="Close video modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Video Player Placeholder */}
            <div className="aspect-video w-full">
              {/* Replace with your actual video embed/player */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-EwNPBuaHbU?autoplay=1" // Updated video URL
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">Rejo Z Mathew - Video Intro</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hero;
