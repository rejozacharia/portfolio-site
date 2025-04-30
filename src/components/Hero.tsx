import React from 'react';
import Image from 'next/image'; // Import Image for potential photo later

const Hero: React.FC = () => {
  return (
    // Light theme: Very light gray background, dark text, blue accents
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Rejo Z Mathew
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            AI & Data Strategy Leader in Financial Services
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Bridging advanced technology and business strategy to drive innovation and ROI in the financial sector.
          </p>
          {/* Buttons with blue accent */}
          <div className="flex justify-center md:justify-start gap-4">
             <a href="#portfolio" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 shadow">
               View Portfolio
             </a>
             <a href="#contact" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 shadow">
               Contact Me
             </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace this div with Image component once URL is provided */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 shadow-lg">
            {/* Placeholder text or icon */}
            <span>Profile Photo</span>
          </div>
          {/* Example using Next/Image (commented out until URL is available)
          <Image
            src="/path/to/your/profile-picture.jpg" // Replace with actual URL
            alt="Rejo Z Mathew - Profile Picture"
            width={400} // Adjust as needed
            height={400} // Adjust as needed
            className="rounded-full shadow-lg"
            priority // Load image priority
          />
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero;