import React from 'react';
import Image from 'next/image';

interface InterestSummaryCardProps {
  title: string;
  briefDescription: string;
  imageUrl?: string; // Optional image for the card
  onClick: () => void; // Function to call when card is clicked
}

const InterestSummaryCard: React.FC<InterestSummaryCardProps> = ({
  title,
  briefDescription,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      {imageUrl ? (
        <div className="relative h-40 w-full">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            layout="fill"
            objectFit="cover"
            className="bg-gray-200"
          />
        </div>
      ) : (
        <div className="h-40 w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
           <span className="text-gray-500 text-sm">No Image</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{briefDescription}</p>
      </div>
    </div>
  );
};

export default InterestSummaryCard;