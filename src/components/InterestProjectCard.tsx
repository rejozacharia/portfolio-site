import React from 'react';
import Image from 'next/image'; // If you plan to use images

interface InterestProjectCardProps {
  title: string;
  description: string;
  explanation?: string; // Optional detailed explanation
  features?: string[]; // Optional list of features
  imageUrl?: string; // Optional image path (relative to /public)
  githubUrl?: string; // Optional link to GitHub repo
}

const InterestProjectCard: React.FC<InterestProjectCardProps> = ({
  title,
  description,
  explanation,
  features,
  imageUrl,
  githubUrl,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white mb-8 transition-shadow duration-300 hover:shadow-xl">
      {imageUrl && (
        <div className="mb-4 relative h-48 w-full overflow-hidden rounded">
          {/* Using a placeholder color if image isn't provided yet */}
          <Image
             src={imageUrl}
             alt={`${title} screenshot`}
             layout="fill"
             objectFit="cover" // or 'contain' depending on preference
             className="bg-gray-200" // Placeholder background
           />
        </div>
      )}
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {explanation && (
        <div className="prose prose-sm max-w-none mb-4 text-gray-700">
          <h3 className="text-lg font-semibold mb-2">How it Works</h3>
          <p>{explanation}</p>
        </div>
      )}
      {features && features.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Features</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-primary hover:text-primary-dark font-medium transition-colors duration-200"
        >
          View on GitHub &rarr;
        </a>
      )}
    </div>
  );
};

export default InterestProjectCard;