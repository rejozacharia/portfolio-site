"use client"; // Needs client-side animation

import React from "react";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

// Animation variants for the list container
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger delay between children
    },
  },
};

// Animation variants for list items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const About: React.FC = () => {
  return (
    // Light theme: White background, dark text
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Executive Summary
        </h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            With over 18 years of extensive leadership experience, I specialize
            in driving transformational change at the intersection of data
            science, business strategy, and technology within the financial
            services industry. My career has focused on building and leading
            high-performing, multi-disciplinary teams across data science,
            business intelligence, analytics, and data infrastructure
            management.
          </p>
          <p>
            I possess a unique blend of deep technical expertise and strong
            business acumen, allowing me to effectively bridge the gap between
            advanced AI/ML capabilities and tangible business outcomes. My
            leadership philosophy centers on fostering data literacy,
            democratizing analytics, and leveraging cutting-edge technology to
            solve complex challenges and achieve aggressive organizational
            targets.
          </p>
          <p>
            Throughout my tenure, particularly at Discover Financial Services, I
            have envisioned and executed key data and analytics strategies,
            delivering significant cost savings, productivity gains, and
            enhanced customer experiences through initiatives such as:
          </p>
          {/* List items using standard body text color, wrapped for animation */}
          <motion.ul
            className="grid list-inside list-disc space-y-2 gap-x-8 pl-4 text-gray-700 md:grid-cols-2"
            variants={listVariants}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
          >
            <motion.li variants={itemVariants}>
              Building sophisticated enterprise control environments and
              exception management systems.
            </motion.li>
            <motion.li variants={itemVariants}>
              Developing enterprise-scale Identity Graphs and Customer360 MDM
              platforms.
            </motion.li>
            <motion.li variants={itemVariants}>
              Implementing impactful MarTech/CDP solutions (Neustar, Segment)
              for improved marketing activation and personalization.
            </motion.li>
            <motion.li variants={itemVariants}>
              Creating generalized Machine Learning feature datastores
              supporting critical modeling efforts (credit risk, retention).
            </motion.li>
            <motion.li variants={itemVariants}>
              Leading the development of self-service BI capabilities across
              multiple business units.
            </motion.li>
          </motion.ul>
          <p>
            Equally fluent in C-suite strategy discussions and hands-on AI
            engineering, I am passionate about leading data initiatives that
            drive both innovation and measurable ROI, preparing organizations
            for the future of data-driven decision-making.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="#expertise"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            See My Expertise
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
