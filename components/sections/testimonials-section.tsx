"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/animated-text";
import { AnimatedCard } from "../ui/animated-card";

const testimonials = [
  {
    id: "testimonial-1",
    content:
      "Working with this agency transformed our online presence. Their team delivered a website that perfectly captures our brand and has significantly increased our conversions.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "testimonial-2",
    content:
      "The team's creativity and attention to detail exceeded our expectations. They not only redesigned our brand identity but helped us connect with our audience in meaningful ways.",
    author: "Michael Chen",
    position: "Marketing Director, Innovate Inc.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "testimonial-3",
    content:
      "From concept to execution, the agency delivered exceptional results. Their strategic approach to our digital marketing campaign resulted in a 200% increase in qualified leads.",
    author: "Emma Rodriguez",
    position: "Founder, GrowthLabs",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 mb-4">
              Testimonials
            </span>
          </motion.div>

          <AnimatedText
            text="What Our Clients Say"
            el="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <AnimatedCard
                    className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm text-center"
                    containerClassName="h-full"
                    isHoverable={false}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-purple-600 rounded-full opacity-10"></div>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover relative z-10"
                        />
                      </div>
                      <div className="text-4xl text-purple-600 dark:text-purple-400 mb-4">
                        "
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">
                        {testimonial.content}
                      </p>
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-purple-600"
                    : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
