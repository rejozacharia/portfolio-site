import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    // Light theme header: white background, shadow, dark text, blue accent on hover
    <header className="bg-white text-gray-800 p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">Rejo Z Mathew</Link>
        <div className="space-x-1 md:space-x-3"> {/* Added spacing */}
          <Link href="#about" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">About</Link>
          <Link href="#expertise" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Expertise</Link>
          <Link href="#experience" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Experience</Link>
          <Link href="#portfolio" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Portfolio</Link>
          <Link href="#education" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Education</Link>
          <Link href="#certifications" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Certifications</Link>
          <Link href="#contact" className="px-2 md:px-3 hover:text-blue-600 transition duration-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;