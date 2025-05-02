"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  // Mark mounted to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-spy handler with logging and negative-top guard
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    console.log(`[ScrollSpy] scrollY = ${y}`);

    // Mark that user has scrolled
    if (!hasUserScrolled && y > 0) {
      setHasUserScrolled(true);
      console.log(`[ScrollSpy] user has now scrolled`);
    }

    // Header style
    setScrolled(y > 10);

    // Only compute active once the user has scrolled
    if (!hasUserScrolled) {
      console.log(`[ScrollSpy] skipping active computation until first scroll`);
      return;
    }

    let found = "";
    // Reverse loop: deepest section wins
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const { href } = navLinks[i];
      if (!href.startsWith("#")) continue;

      const el = document.getElementById(href.slice(1));
      if (!el) {
        console.log(`[ScrollSpy] no element for ${href}`);
        continue;
      }

      const top = el.offsetTop - 80;
      console.log(`[ScrollSpy] checking ${href}: sectionTop = ${top}`);
      if (top < 0) {
        console.log(`[ScrollSpy] skipping ${href} (sectionTop < 0)`);
        continue;
      }

      if (y >= top) {
        found = href;
        console.log(`[ScrollSpy] matched ${href}`);
        break;
      }
    }

    console.log(`[ScrollSpy] final found = '${found}'`);
    setActive(found);
  }, [hasUserScrolled]);

  // Attach scroll listener (no initial call)
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        mounted && scrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent shadow-none"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo animates on mount */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`text-xl font-bold transition-colors duration-300 ${
              mounted && scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Rejo Z Mathew
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-1 md:flex md:space-x-3">
          {navLinks.map(({ href, label }) => {
            const url =
              href.startsWith("#") && typeof window !== "undefined" && !window.location.pathname.startsWith(href)
                ? `/${href}`
                : href;
            const isActive = mounted && hasUserScrolled && active === href;
            return (
              <Link
                key={href}
                href={url}
                onClick={() => setMenuOpen(false)}
                className={`rounded px-3 py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : mounted && scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className={`md:hidden rounded p-1 transition-colors duration-300 focus:outline-none ${
            mounted && scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full origin-top overflow-hidden bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
              {navLinks.map(({ href, label }) => {
                const url =
                  href.startsWith("#") && typeof window !== "undefined" && !window.location.pathname.startsWith(href)
                    ? `/${href}`
                    : href;
                const isAct = mounted && hasUserScrolled && active === href;
                return (
                  <Link
                    key={href}
                    href={url}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:text-primary ${
                      isAct ? "bg-primary/10 text-primary font-semibold" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
