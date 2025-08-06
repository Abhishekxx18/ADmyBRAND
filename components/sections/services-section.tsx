"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "../ui/animated-card";
import { AnimatedText } from "../ui/animated-text";

const services = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "We create stunning, responsive websites that captivate your audience and drive conversions.",
    icon: "💻",
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "We develop memorable brand identities that resonate with your target audience and stand out in the market.",
    icon: "🎨",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "We implement strategic marketing campaigns that increase visibility and drive meaningful engagement.",
    icon: "📈",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "We build innovative mobile applications that solve problems and enhance user experiences.",
    icon: "📱",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "We craft intuitive user interfaces and seamless experiences that keep users coming back.",
    icon: "✨",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "We produce compelling content that tells your story and connects with your audience.",
    icon: "📝",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900"
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
              Our Services
            </span>
          </motion.div>

          <AnimatedText
            text="What We Do Best"
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
            We offer a comprehensive range of digital services to help your
            business thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={service.id}
              className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              containerClassName="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 flex-grow">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="text-purple-600 dark:text-purple-400 font-medium flex items-center group">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
