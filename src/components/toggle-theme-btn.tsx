"use client";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const ToggleTheme = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();



  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn("flex items-center justify-center h-8 w-8", className)}
      />
    );
  }

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.06 }}
      className={cn(
        "flex items-center justify-center h-8 w-8 relative cursor-pointer rounded-md hover:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow duration-150",
        className,
      )}
      onClick={handleClick}
    >
      <SunIcon
        className={cn(
          "absolute size-4.5 text-muted-foreground top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          isDark
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-0 rotate-90",
        )}
      />

      <MoonIcon
        className={cn(
          "absolute size-4.5 text-muted-foreground top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          isDark
            ? "opacity-0 scale-0 rotate-90"
            : "opacity-100 scale-100 rotate-0",
        )}
      />
    </motion.button>
  );
};