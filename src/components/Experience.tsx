"use client"; // Mark component as client-side for framer-motion

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

interface ExperienceItem {
  company: string;
  location?: string;
  title: string;
  dates: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  // ... (Keep the existing experiences array definition) ...
  {
    company: "Discover Financial Services",
    location: "Chicago",
    title:
      "SR. DIRECTOR, MIS, Data Science, BI & Data Infrastructure Management, DNA",
    dates: "June 2022 – Till Date",
    description: [
      "Head of MIS, Data Science, BI, and Data Management/Engineering for DNA organization.",
      "Built sophisticated enterprise control environment & exception management capability.",
      "Led workstreams on student loan portfolio transfer.",
      "Built Enterprise Identity graph & Customer360 MDM data structures.",
      "Collaborated on MarTech/CDP solutions (Neustar, Segment).",
      "Managed multi-discipline, multi-geography team (~25 people).",
      "Envisioned and executed phases of multi-year data & analytics platform strategy.",
    ],
  },
  {
    company: "Discover Financial Services",
    title: "DIRECTOR, Data Science, BI & Data Infrastructure Management, CB",
    dates: "Oct 2018 – June 2022",
    description: [
      "Head of Data Science, BI, and Data Management/Engineering for Consumer Banking.",
      "Led ML/analytics initiatives generating ~$10MM annual cost benefits.",
      "Built generalized ML feature datastore for multiple products.",
      "Implemented self-service BI capabilities across Consumer Banking.",
      "Interacted frequently with C-level executives on strategy and data literacy.",
    ],
  },
  {
    company: "Discover Financial Services",
    title: "SR. MANAGER, Analytics, BI & Pricing - Discover Home Loans (DHL)",
    dates: "Jul 2016 – Oct 2018",
    description: [
      "Head of Analytics, BI, and Pricing for DHL; developed Analytics function from ground up.",
      "Built BI data infrastructure for the business.",
      "Led analytics initiatives, analyzed metrics (CPFL, conversion), presented recommendations.",
      "Utilized Lean Six-Sigma for process improvements (200bps lift in loan conversion).",
      "Managed pricing; revised risk-based pricing methodology leading to 20% ROE increase.",
    ],
  },
  {
    company: "Discover Financial Services",
    title: "MANAGER, Analytics & Data Management",
    dates: "Jul 2014 – Jul 2016",
    description: [
      "Managed operational analytics and business management reporting within DHL strategy group.",
    ],
  },
  {
    company: "Discover Financial Services",
    title: "PROJECT MANAGER, Analytics",
    dates: "Apr 2012 – Jul 2014",
    description: [
      "Conducted business analytics and management reporting for DHL.",
    ],
  },
  {
    company: "American Express",
    location: "Phoenix (via Cognizant)",
    title: "SENIOR BUSINESS ANALYST",
    dates: "Apr 2010 – Apr 2012",
    description: [
      "Project management for multi-million-dollar implementations.",
      "Analytics & reporting for AMEX membership rewards team.",
    ],
  },
  {
    company: "Deloitte Consulting LLP",
    location: "Chicago",
    title: "SENIOR CONSULTANT, Summer Associate",
    dates: "Jun 2008 – Aug 2008",
    description: [
      "Delivered a $40M high-level business re-engineering plan for a healthcare insurance provider's BI reporting solution.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "India",
    title: "ASSISTANT SYSTEM ENGINEER",
    dates: "Feb 2007 – Jul 2007",
    description: [
      "Led a team to analyze & develop technology solutions for American Express products.",
    ],
  },
  {
    company: "UST Global",
    location: "India",
    title: "SENIOR SOFTWARE ENGINEER",
    dates: "Dec 2003 – Oct 2006",
    description: [
      "Designed and developed enterprise software solutions for insurance/finance clients.",
    ],
  },
];

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const Experience: React.FC = () => {
  return (
    // Light theme: White background, dark text, blue timeline accents
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Professional Experience
        </h2>
        {/* Adjusted timeline line color */}
        <div className="relative space-y-12 before:absolute before:top-0 before:bottom-0 before:left-[5px] before:w-1 before:bg-gray-300">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pb-8 pl-10 last:pb-0"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Adjusted dot border color */}
              <div className="bg-primary absolute top-1 left-0 h-4 w-4 rounded-full border-4 border-white"></div>
              {/* Adjusted text colors */}
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="text-md text-primary font-medium">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </p>
              <p className="mb-2 text-sm text-gray-500">{exp.dates}</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#portfolio"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
