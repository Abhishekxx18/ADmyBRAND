"use client";

import React, { useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  isHoverable?: boolean;
}

export const AnimatedCard = ({
  children,
  className,
  containerClassName,
  isHoverable = true,
  ...props
}: AnimatedCardProps) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!isHoverable) return;
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn("relative", containerClassName)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className={cn(
          "relative w-full h-full rounded-xl transition-all duration-200 ease-linear",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 1,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};
