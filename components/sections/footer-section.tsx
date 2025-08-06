"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">ADmyBRAND</h2>
              <p className="text-zinc-400 mb-6">
                We create digital experiences that inspire and engage audiences
                worldwide. Our passion for innovation drives everything we do.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <p className="text-zinc-400 mb-4">
                Stay updated with our latest news and projects.
              </p>
              <form className="space-y-3">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-zinc-400 text-sm"
          >
            {currentYear} ADmyBRAND Agency. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <Link
              href="#"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
