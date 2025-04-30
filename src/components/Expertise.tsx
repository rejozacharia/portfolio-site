'use client'; // Mark component as client-side for recharts

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
      "Machine Learning (ML) Model Development & Implementation",
      "AI Strategy & Vision",
      "Predictive Modeling (Credit Risk, Retention, Pre-payment)",
      "ML Feature Engineering & Datastores",
      "MLOps (Concept & Certification)",
      "Natural Language Processing (NLP - Implied)",
      "Graph Analytics (Neo4j, RAG)",
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
      "Data Warehousing",
      "MarTech/CDP Implementation (Neustar, Segment)",
      "Data Governance & Control Environments",
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
      "Performance Metrics Analysis (CPFL, Conversion)",
      "Data Visualization",
    ],
  },
   {
    title: "Technologies & Tools", // Keep this for the list view
    skills: [
      "Cloud Platforms (AWS Certified)",
      "Databases (SQL, NoSQL, Graph - Neo4j)",
      "BI Tools (Conceptual)",
      "Data Science Languages (Python - Assumed)",
      "ML Frameworks (Conceptual)",
      "MarTech Platforms (Neustar, Segment)",
      "ServiceNow (Case Management)",
    ],
  },
];

// Sample data for the Radar chart (adjust scores as needed)
const skillProficiencyData = [
  { subject: 'Leadership', A: 95, fullMark: 100 },
  { subject: 'AI/ML', A: 90, fullMark: 100 },
  { subject: 'Data Eng.', A: 85, fullMark: 100 },
  { subject: 'BI/Analytics', A: 88, fullMark: 100 },
  { subject: 'Technology', A: 80, fullMark: 100 },
];


const Expertise: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="expertise" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Expertise & Skills
        </h2>

        {/* Radar Chart Visualization */}
        <div className="mb-16 h-80 md:h-96">
           <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Core Competency Overview</h3>
           <ResponsiveContainer width="100%" height="100%">
            {/* Adjusted chart colors for light theme */}
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillProficiencyData}>
              <PolarGrid stroke="#d1d5db" /> {/* Lighter grid lines */}
              <PolarAngleAxis dataKey="subject" stroke="#4b5563" /> {/* Darker axis text */}
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Proficiency" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} /> {/* Blue accent */}
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #d1d5db' }} /> {/* Light tooltip */}
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Skill Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            // White card background, dark text
            <div key={area.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{area.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {area.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;