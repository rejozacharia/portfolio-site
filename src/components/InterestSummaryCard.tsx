import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { ProjectData } from '@/data/projects'; // Import the centralized data type

// Define category colors using Tailwind classes
const categoryStyles = {
  software: {
    border: 'border-t-4 border-blue-500',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-800',
  },
  hardware: {
    border: 'border-t-4 border-green-500',
    tagBg: 'bg-green-100',
    tagText: 'text-green-800',
  },
  other: { // Changed 'both' to 'other' and updated style
    border: 'border-t-4 border-gray-500',
    tagBg: 'bg-gray-100',
    tagText: 'text-gray-800',
  },
};

// Update props to accept category, tags, and slug
interface InterestSummaryCardProps {
  project: Pick<ProjectData, 'title' | 'briefDescription' | 'cardImageUrl' | 'category' | 'tags' | 'slug'>;
  onClick: () => void; // Function to call when card is clicked (used if no slug)
}

const InterestSummaryCard: React.FC<InterestSummaryCardProps> = ({
  project,
  onClick,
}) => {
  const { title, briefDescription, cardImageUrl, category, tags, slug } = project;
  // Default to 'other' style if category doesn't match software/hardware
  const styles = categoryStyles[category] || categoryStyles.other;

  // Define the common card content as a JSX fragment
  const cardContent = (
    <>
      {/* Image Section */}
      <div className="relative h-40 w-full flex-shrink-0">
        {cardImageUrl ? (
          <Image
            src={cardImageUrl}
            alt={`${title} preview`}
            layout="fill"
            objectFit="cover"
            className="bg-gray-200"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-3 flex-grow">{briefDescription}</p>

        {/* Tags Section */}
        {tags && tags.length > 0 && (
          <div className="mt-auto pt-2 border-t border-gray-100">
             <p className="text-xs font-medium text-gray-500 mb-1.5">Tags:</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 5).map((tag) => ( // Limit tags shown on card
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles.tagBg} ${styles.tagText}`}
                >
                  {tag}
                </span>
              ))}
               {tags.length > 5 && (
                 <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles.tagBg} ${styles.tagText}`}>...</span>
               )}
            </div>
          </div>
        )}
      </div>
    </>
  );

  // If a slug exists, wrap the card content in a Link to the project page
  if (slug) {
    return (
      <Link
        href={`/interests/${slug}`}
        // Apply styles directly to the Link component
        className={`block rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${styles.border}`}
      >
        {cardContent}
      </Link>
    );
  }

  // Otherwise, render the card as a div that triggers the modal onClick
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col ${styles.border}`}
      onClick={onClick}
    >
      {cardContent}
    </div>
  );
};

export default InterestSummaryCard;