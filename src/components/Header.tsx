"use client"; // This component needs client-side interactivity

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
  { href: "/interests", label: "Interests" },
];

const Header: React.FC = () => {
  const pathname = usePathname(); // Get current pathname
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // Update scroll state for header background/shadow
    setIsScrolled(scrollY > 10);

    // Basic Scrollspy Logic
    let currentSection = "";
    navLinks.forEach((link) => {
      if (link.href.startsWith("#")) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop - 80; // Adjust offset for header height
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = link.href;
          }
        }
      }
    });

    // Fallback if no section is actively in view (e.g., top or bottom of page)
    if (!currentSection && scrollY < 200) {
        currentSection = "#"; // Or maybe the first section like #hero if it exists
    }

    setActiveSection(currentSection);
  }, []); // No dependencies needed if navLinks is stable

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm"
          : "bg-transparent shadow-none"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-white" // Adjust initial text color if needed
          }`}
          onClick={closeMobileMenu}
        >
          Rejo Z Mathew
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-1 md:flex md:space-x-3">
          {navLinks.map((link) => {
            // Adjust href for hash links if not on the homepage
            const href = (link.href.startsWith('#') && pathname !== '/')
              ? `/${link.href}`
              : link.href;

            return (
              <Link
                key={link.href} // Keep original href as key for stability
                href={href}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  // Adjust activeSection check if needed, might be complex with /#hash
                  (activeSection === link.href && pathname === '/') // Only highlight hash links on homepage
                    ? "text-primary font-semibold"
                  : isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-gray-200 hover:text-white" // Adjust initial link color
              }`}
              >
                {link.label}
              </Link>
            ); // Add closing parenthesis for return
          })} {/* Add closing curly brace for map callback */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className={`rounded p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full origin-top overflow-hidden bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => {
                 // Adjust href for hash links if not on the homepage
                 const href = (link.href.startsWith('#') && pathname !== '/')
                   ? `/${link.href}`
                   : link.href;

                 return (
                   <Link
                     key={link.href} // Keep original href as key
                     href={href}
                     onClick={closeMobileMenu} // Close menu on link click
                     className={`block rounded px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-primary ${
                       // Adjust activeSection check if needed
                       (activeSection === link.href && pathname === '/') // Only highlight hash links on homepage
                         ? "bg-primary/10 text-primary"
                      : "text-gray-700"
                  }`}
                  >
                    {link.label}
                  </Link>
                ); // Add closing parenthesis for return
              })} {/* Add closing curly brace for map callback */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
