"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedButton } from "./animated-button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-zinc-900 dark:text-white">
                  ADmyBRAND
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                      : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <AnimatedButton
                variant="primary"
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Get Started
              </AnimatedButton>
              <ThemeToggle />
            </div>

            <div className="md:hidden text-zinc-700 dark:text-zinc-300 flex items-center gap-4">
              <ThemeToggle />
              <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white dark:bg-zinc-900 shadow-lg md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <AnimatedButton
                  variant="primary"
                  size="sm"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Get Started
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
