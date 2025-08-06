"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  items: {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
  }[];
  className?: string;
}

export const AnimatedGrid = ({ items, className }: AnimatedGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          className="relative group h-[300px] md:h-[350px] rounded-xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
            ease: [0.21, 0.5, 0.51, 1],
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => item.link && window.open(item.link, "_blank")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <motion.h3
              className="text-xl font-bold mb-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              initial={false}
              animate={
                hoveredIndex === idx
                  ? { y: 0, opacity: 1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              initial={false}
              animate={
                hoveredIndex === idx
                  ? { y: 0, opacity: 1 }
                  : { y: 20, opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
