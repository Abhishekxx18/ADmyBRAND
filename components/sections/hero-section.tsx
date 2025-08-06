"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/animated-text";
import { AnimatedButton } from "../ui/animated-button";
import { AnimatedGradient } from "../ui/animated-gradient";

export const HeroSection = () => {
  return (
    <AnimatedGradient
      containerClassName="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      colors={[
        "rgba(76, 29, 149, 0.5)",
        "rgba(124, 58, 237, 0.5)",
        "rgba(219, 39, 119, 0.5)",
        "rgba(236, 72, 153, 0.5)",
      ]}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md text-zinc-700 dark:text-white mb-4">
            Creative Digital Agency
          </span>
        </motion.div>

        <AnimatedText
          text={["We craft digital", "experiences that", "inspire & engage"]}
          el="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-700 dark:text-white mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-700 dark:text-white/80 max-w-3xl mx-auto mb-8"
        >
          We're a team of passionate designers, developers, and strategists who
          help brands connect with their audiences through innovative digital
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <AnimatedButton
            variant="primary"
            size="lg"
            className="bg-white text-purple-900 hover:bg-white/90"
          >
            View Our Work
          </AnimatedButton>
          <AnimatedButton
            variant="outline"
            size="lg"
            className="border-zinc-700 dark:border-white text-zinc-700 dark:text-white hover:bg-white/30 hover:dark:bg-white/10"
          >
            Get in Touch
          </AnimatedButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-zinc-700 dark:text-white/60 text-sm mb-4">
            Trusted by innovative brands
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Brand 1", "Brand 2", "Brand 3", "Brand 4"].map(
              (brand, index) => (
                <div
                  key={index}
                  className="h-8 flex items-center justify-center text-zinc-700 dark:text-white/80 font-bold"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </AnimatedGradient>
  );
};
