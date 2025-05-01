"use client"; // Make this a Client Component to use framer-motion

import Image from 'next/image';
import React from "react";
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
            <a
              href="#portfolio"
              className="bg-primary hover:bg-primary/90 rounded px-4 py-2 font-bold text-white shadow transition duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded bg-gray-700 px-4 py-2 font-bold text-white shadow transition duration-300 hover:bg-gray-800"
            >
              Contact Me
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
    </motion.div>
  );
};

export default Hero;
