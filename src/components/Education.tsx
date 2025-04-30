import React from 'react';

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

const Education: React.FC = () => {
  return (
    // Light theme: White background, light gray cards, dark text
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Education
        </h2>
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            // Light gray card background, dark text
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
              {edu.location && <p className="text-sm text-gray-500 mb-1">{edu.location}</p>}
              <p className="text-lg font-medium text-blue-700">{edu.degree} ({edu.year})</p>
              {edu.details && <p className="text-md text-gray-800 mt-1">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;