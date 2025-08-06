"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/animated-text";
import { AnimatedGrid } from "../ui/animated-grid";

const portfolioItems = [
  {
    id: "project-1",
    title: "Modern E-commerce Platform",
    description: "Web Design & Development",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    category: "web",
    link: "#",
  },
  {
    id: "project-2",
    title: "Luxury Brand Identity",
    description: "Branding & Strategy",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    category: "branding",
    link: "#",
  },
  {
    id: "project-3",
    title: "Fitness Mobile App",
    description: "UI/UX & Development",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    category: "app",
    link: "#",
  },
  {
    id: "project-4",
    title: "Financial Dashboard",
    description: "Web App & Data Visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "web",
    link: "#",
  },
  {
    id: "project-5",
    title: "Restaurant Rebranding",
    description: "Branding & Marketing",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    category: "branding",
    link: "#",
  },
  {
    id: "project-6",
    title: "Travel Companion App",
    description: "Mobile App Development",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    category: "app",
    link: "#",
  },
];

const categories = [
  { id: "all", name: "All Work" },
  { id: "web", name: "Web" },
  { id: "branding", name: "Branding" },
  { id: "app", name: "Mobile Apps" },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-4">
              Our Portfolio
            </span>
          </motion.div>

          <AnimatedText
            text="Featured Projects"
            el="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-10"
          >
            Explore our latest work and see how we've helped businesses achieve
            their digital goals.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatedGrid items={filteredItems} />

        <div className="text-center mt-12">
          <motion.button
            className="px-6 py-3 rounded-full bg-transparent border border-purple-600 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};
