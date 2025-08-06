"use client";

import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("theme changed");
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center rounded-md p-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-5 h-5"
      >
        {theme == "dark" ? (
          <Sun className="absolute inset-0 h-5 w-5 text-zinc-700 dark:text-zinc-300" />
        ) : (
          <Moon className="absolute inset-0 h-5 w-5 text-zinc-700 dark:text-zinc-300" />
        )}
      </motion.div>
    </button>
  );
}
