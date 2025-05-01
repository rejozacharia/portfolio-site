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
  category: 'software' | 'hardware' | 'both'; // Added category
  tags: string[]; // Added tags array
  explanation?: string;
  features?: string[];
  imageUrls?: string[]; // Array of image paths for modal gallery/display
  githubUrl?: string;
  cardImageUrl?: string; // Optional specific image for the summary card
}

// Define category colors/styles for the modal
const categoryModalStyles = {
  software: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: 'Software Project',
  },
  hardware: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: 'Hardware Project',
  },
  both: {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    label: 'Hardware & Software Project',
  },
};


interface InterestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null; // Pass the full project data
}

const InterestDetailModal: React.FC<InterestDetailModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null; // Don't render if no project is selected

  const styles = categoryModalStyles[project.category] || categoryModalStyles.software;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4" // Increased z-index
          onClick={onClose} // Close modal on backdrop click
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" // Adjusted max-width
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-3 right-3 z-[110] text-gray-500 hover:text-gray-900 bg-white/70 hover:bg-gray-100 backdrop-blur-sm transition-colors p-1.5 rounded-full"
              aria-label="Close project details"
            >
              <X size={24} />
            </button>

            {/* Modal Content Area */}
            <div className="p-6 md:p-8 lg:p-10"> {/* Added padding */}

              {/* Title and Category Badge */}
              <div className="mb-4">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{project.title}</h2>
                 <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${styles.bg} ${styles.text}`}>
                   {styles.label}
                 </span>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-1.5">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {project.imageUrls && project.imageUrls.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.imageUrls.map((url, index) => (
                     <div key={index} className="relative aspect-video w-full overflow-hidden rounded border bg-gray-100">
                       <img
                         src={url} // Using standard img tag for simplicity here, could use Next Image
                         alt={`${project.title} screenshot ${index + 1}`}
                         className="object-contain w-full h-full" // Changed to contain
                         loading="lazy" // Added lazy loading
                       />
                     </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">{project.description}</p>

              {/* Explanation */}
              {project.explanation && (
                <div className="prose prose-base max-w-none mb-5 text-gray-700">
                  <h3 className="text-xl font-semibold mb-2">How it Works</h3>
                  <p>{project.explanation}</p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Features</h3>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-600 columns-1 md:columns-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* GitHub Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-primary hover:text-primary-dark font-medium transition-colors duration-200 text-lg group"
                >
                  View on GitHub
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              )}
            </div> {/* End Modal Content Area */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InterestDetailModal;