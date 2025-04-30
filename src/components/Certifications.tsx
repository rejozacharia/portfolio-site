import React from 'react';

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

const Certifications: React.FC = () => {
  return (
    // Light theme: Light gray background, white cards, dark text
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, index) => (
            // White card, dark text
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white text-center">
              {/* Placeholder for icon/logo */}
              <div className="mb-3 text-blue-600"> {/* Blue icon */}
                 {/* Replace with actual icon later */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}> {/* Adjusted stroke width */}
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Updated checkmark icon */}
                 </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.issuingBody}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;