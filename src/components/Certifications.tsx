"use client"; // Needs client-side animation & hover effects

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface CertificationItem {
  issuingBody: string;
  name: string;
  // Optional: Add icon or logo URL later
  // iconUrl?: string;
}

const certificationsList: CertificationItem[] = [
  // ... (Keep existing certificationsList array) ...
  {
    issuingBody: "DAMA International",
    name: "Certified Data Management Professional (CDMP)",
  },
  {
    issuingBody: "Amazon Web Services",
    name: "AWS Certified Cloud Practitioner",
  },
  {
    issuingBody: "DeepLearning.AI",
    name: "Machine Learning Engineering for Production (MLOps)",
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

const Certifications: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="certifications" className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={index}
              className="card-common text-center" // Applied common card style, kept text-center
              variants={cardAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.02 }} // Added hover scale effect
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation for hover
            >
              {/* Placeholder for icon/logo */}
              <div className="text-primary mb-3">
                {" "}
                {/* Primary color icon */}
                {/* Replace with actual icon later */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {" "}
                  {/* Adjusted stroke width */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />{" "}
                  {/* Updated checkmark icon */}
                </svg>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600">{cert.issuingBody}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
