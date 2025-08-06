"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  containerClassName?: string;
  colors?: string[];
  duration?: number;
  blur?: number;
  children?: React.ReactNode;
}

export const AnimatedGradient = ({
  className,
  containerClassName,
  colors = [
    "rgba(76, 29, 149, 0.7)",
    "rgba(124, 58, 237, 0.7)",
    "rgba(219, 39, 119, 0.7)",
    "rgba(236, 72, 153, 0.7)",
  ],
  duration = 10,
  blur = 100,
  children,
}: AnimatedGradientProps) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGradientPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, ${colors.join(", ")})`,
    filter: `blur(${blur}px)`,
    transition: `all ${duration / 10}s cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-60 z-0 transform -translate-y-8 translate-x-8",
          className
        )}
        style={gradientStyle}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
