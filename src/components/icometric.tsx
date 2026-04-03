"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const IsometricBox = ({
  className,
  variant = "top",
  isActive,
}: {
  className?: string;
  variant?: "top" | "left" | "right";
  isActive?: boolean;
}) => {
  const TRANSITION = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  const YVariant = {
    animate: {
      translateY: -20,
    },
    initial: {
      translateY: 0,
    },
  };

  const XVariant = {
    animate: {
      translateX: 20,
    },
    initial: {
      translateX: 0,
    },
  };
  const NegativeXVariant = {
    animate: {
      translateX: -20,
    },
    initial: {
      translateX: 0,
    },
  };

  const noOpVariants = {
    animate: {
      translateX: 0,
      translateY: 0,
    },
    initial: {
      translateX: 0,
      translateY: 0,
    },
  };

  const getVariants = (face: "top" | "left" | "right") => {
    if (face !== variant) {
      return noOpVariants;
    }
    switch (face) {
      case "left":
        return NegativeXVariant;
      case "right":
        return XVariant;
      case "top":
        return YVariant;
    }
  };

  return (
    <motion.div whileHover={"animate"} initial="initial">
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("size-60 text-neutral-200 dark:text-neutral-800")}
      >
        {/* Top face with rounded corners */}
        <motion.path
          variants={getVariants("top")}
          transition={TRANSITION}
          d="M100 40 Q108 40 155 68 Q162 72 155 76 Q108 104 100 104 Q92 104 45 76 Q38 72 45 68 Q92 40 100 40 Z"
          className="fill-neutral-50 dark:fill-neutral-900"
          stroke="var(--color-neutral-200)"
          strokeWidth="1.5"
        />

        {/* Inner rounded rectangle on top */}
        <motion.path
          variants={getVariants("top")}
          transition={TRANSITION}
          d="M100 52 Q105 52 132 68 Q138 72 132 76 Q105 92 100 92 Q95 92 68 76 Q62 72 68 68 Q95 52 100 52 Z"
          className="fill-white dark:fill-neutral-950"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
        />

        {/* Left face */}
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M45 76 L100 104 L100 164 Q100 170 92 166 L45 140 Q38 136 38 128 L38 80 Q38 72 45 76 Z"
          className="fill-neutral-100 dark:fill-neutral-950"
          stroke="var(--color-neutral-200)"
          strokeWidth="1.5"
        />

        {/* Right face */}
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M155 76 L100 104 L100 164 Q100 170 108 166 L155 140 Q162 136 162 128 L162 80 Q162 72 155 76 Z"
          className="fill-neutral-50 dark:fill-neutral-900"
          stroke="var(--color-neutral-200)"
          strokeWidth="1.5"
        />

        {/* Vertical lines on left face */}
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M55 86 L55 145"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M70 95 L70 155"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M85 104  L85 162"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />

        {/* Vertical lines on right face */}
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M145 86 L145 145"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M130 95 L130 155"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M115 104 L115 162"
          stroke="var(--color-neutral-200)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </motion.svg>
    </motion.div>
  );
};
