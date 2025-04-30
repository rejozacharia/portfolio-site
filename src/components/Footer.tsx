import React from 'react';

const Footer: React.FC = () => {
  return (
    // Light theme: Light gray background, darker text/icons
    <footer className="bg-gray-100 text-gray-600 p-6 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/rejozmathew/"
            target="_blank"
            rel="noopener noreferrer"
            // Adjusted link colors for light background
            className="text-gray-500 hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
            </svg>
          </a>
          {/* Placeholder for GitHub icon/link */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition duration-300" aria-label="GitHub Profile">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
          </a> */}
        </div>
        {/* Adjusted copyright text color */}
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Rejo Z Mathew. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;