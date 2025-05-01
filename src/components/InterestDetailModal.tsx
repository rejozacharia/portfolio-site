import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
// import InterestProjectCard from './InterestProjectCard'; // No longer directly using this

// Define the structure for project data, including multiple images
export interface ProjectData {
  id: string; // Unique identifier
  title: string;
  briefDescription: string; // For the summary card
  description: string; // Full description for modal
  explanation?: string;
  features?: string[];
  imageUrls?: string[]; // Array of image paths for modal gallery/display
  githubUrl?: string;
  cardImageUrl?: string; // Optional specific image for the summary card
}


interface InterestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null; // Pass the full project data
}

const InterestDetailModal: React.FC<InterestDetailModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null; // Don't render if no project is selected

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
          onClick={onClose} // Close modal on backdrop click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors z-10 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>

            {/* Use InterestProjectCard structure but pass full data */}
            {/* We might need to adjust InterestProjectCard or replicate structure here if we want multiple images */}
            <div className="border rounded-lg p-6 shadow-lg bg-white mb-8 transition-shadow duration-300 hover:shadow-xl">
              {project.imageUrls && project.imageUrls.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.imageUrls.map((url, index) => (
                     <div key={index} className="relative h-48 w-full overflow-hidden rounded border">
                       <img
                         src={url} // Using standard img tag for simplicity here, could use Next Image
                         alt={`${project.title} screenshot ${index + 1}`}
                         className="object-cover w-full h-full bg-gray-200"
                       />
                     </div>
                  ))}
                </div>
              )}
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mb-5 text-lg">{project.description}</p>
              {project.explanation && (
                <div className="prose prose-base max-w-none mb-5 text-gray-700">
                  <h3 className="text-xl font-semibold mb-2">How it Works</h3>
                  <p>{project.explanation}</p>
                </div>
              )}
              {project.features && project.features.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 columns-1 md:columns-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:text-primary-dark font-medium transition-colors duration-200 text-lg"
                >
                  View on GitHub &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InterestDetailModal;