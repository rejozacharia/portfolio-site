"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const bannerVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit:   { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const Hero: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            key="banner"
            className="fixed top-15 left-0 w-full bg-blue-600 text-white px-4 py-3 flex justify-between items-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={bannerVariants}
          >
            <span>
              📣 Join me at the Neo4j Graph Summit in Chicago on {" "}
              <strong>Aug 21, 2025</strong>, where I’ll be presenting on how building
              enterprise identity graphs help unlock next‑gen analytics, marketing & CX.{" "}
              <a
                href="https://neo4j.com/graphsummit/chicago-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Learn more
              </a>
            </span>
            <button
              onClick={() => setShowBanner(false)}
              aria-label="Close announcement"
              className="text-2xl leading-none ml-4 hover:text-gray-200"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="pt-16"
      >
        <section
          id="hero"
          className="flex min-h-screen items-center justify-center bg-gray-50 py-20"
        >
          <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
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
              <div className="flex justify-center gap-4 md:justify-start">
                <a
                  href="#contact"
                  className="rounded bg-gray-700 px-4 py-2 font-bold text-white shadow transition duration-300 hover:bg-gray-800"
                >
                  Contact Me
                </a>
                <a
                  href="/Rejo_Z_Mathew_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-primary px-4 py-2 font-bold text-primary shadow transition duration-300 hover:bg-primary/10"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center md:w-1/2">
              <Image
                src="/profile_pic.jpg"
                alt="Rejo Z Mathew - Profile Picture"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
