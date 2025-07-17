"use client"; // Mark component as client-side for recharts & motion

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link"; // Import Link for CTA

// Define skill categories and items based on resume/instructions
const expertiseAreas = [
  // ... (Keep the existing expertiseAreas array definition) ...
  {
    title: "Leadership & Strategy",
    skills: [
      "Executive Leadership & Communication",
      "Data & Analytics Strategy Roadmap",
      "Multi-Discipline Team Management (Data Science, Engineering, Analytics)",
      "Cross-Functional Collaboration",
      "Business Strategy Alignment",
      "Data Literacy Promotion",
      "Project & Program Management",
      "Lean Six-Sigma Process Improvement",
    ],
  },
  {
    title: "Data Science & AI/ML",
    skills: [
      "AI Strategy & Vision",
      "Machine Learning (ML) Model Development & Implementation",
      "Predictive Modeling (Credit Risk, Retention, Pre-payment)",
      "ML Feature Engineering & Datastores",
      "MLOps (Concept & Certification)",
      "Natural Language Processing (NLP - Implied)",
      "Graph Analytics (Neo4j, RAG)",
      "Data Science Languages (Python, SAS)",
    ],
  },
  {
    title: "Data Engineering & Infrastructure",
    skills: [
      "Data Infrastructure Management (Cloud & On-Prem)",
      "Master Data Management (MDM - Customer360)",
      "Enterprise Identity Graphs",
      "Data Platform Architecture",
      "ETL/ELT Pipeline Development",
      "Data Warehousing (Snowflake, Teradata)",
      "Data Governance & Control Environments",
      "Data Stewardship",
      "DAMA Certified Data Management Professional",
    ],
  },
  {
    title: "Business Intelligence & Analytics",
    skills: [
      "Business Intelligence (BI) Strategy & Implementation",
      "Self-Service BI Enablement",
      "Marketing & Business Analytics",
      "Executive Dashboards & Reporting",
      "Pricing Analytics & Strategy",
      "Performance Metrics Analysis (CPA, Conversion etc.)",
      "Data Visualization",
      "BI Tools (Tableau, AtScale etc.)",
    ],
  },
  {
    title: "Technologies & Tools", // Keep this for the list view
    skills: [
      "Cloud Platforms (AWS Certified)",
      "Databases (SQL, NoSQL, Graph - Neo4j)",
      "Cloud ML Frameworks",
      "MarTech Platforms (Neustar, Segment)",
      "ServiceNow (Case Management)",
      "Enterprise Architecture",
    ],
  },
];

// Sample data for the Radar chart (adjust scores as needed)
const skillProficiencyData = [
  { subject: "Leadership", A: 95, fullMark: 100 },
  { subject: "AI/ML", A: 90, fullMark: 100 },
  { subject: "Data Eng.", A: 95, fullMark: 100 },
  { subject: "BI/Analytics", A: 100, fullMark: 100 },
  { subject: "Technology", A: 85, fullMark: 100 },
];

// Animation variants for fade-in effect
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Expertise: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="expertise" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-12 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Expertise & Skills
        </h2>

        {/* Radar Chart Visualization - Wrapped for animation */}
        <motion.div
          className="mb-16 h-80 md:h-96"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800">
            Core Competency Overview
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            {/* Adjusted chart colors for light theme */}
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={skillProficiencyData}
            >
              <PolarGrid stroke="#d1d5db" /> {/* Lighter grid lines */}
              <PolarAngleAxis dataKey="subject" stroke="#4b5563" />{" "}
              {/* Darker axis text */}
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.6}
              />{" "}
              {/* Blue accent */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid #d1d5db",
                }}
              />{" "}
              {/* Light tooltip */}
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Detailed Skill Lists - Could also wrap this grid or individual cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            // White card background, dark text
            <div key={area.title} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-primary mb-4 text-xl font-semibold">
                {area.title}
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                {area.skills.map(
                  (
                    skill // Removed unused 'idx'
                  ) => (
                    <li key={skill}>{skill}</li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="#experience"
            className="btn-primary inline-block rounded px-6 py-3 text-lg font-semibold text-white shadow transition duration-300"
          >
            View My Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
