"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export const IsometricCards = () => {
  const features = [
    {
      id: 1,
      title: "AI Code Generation",
      description:
        "Generate code snippets, functions, or even entire modules based on natural language descriptions.",
      variant: "left" as const,
    },
    {
      id: 2,
      title: "Smart Refactoring",
      description:
        "Suggest improvements to existing code, such as optimizing algorithms, improving readability, or adhering to best practices.",
      variant: "top" as const,
    },
    {
      id: 3,
      title: "Instant Deployment",
      description:
        "Deploy your applications with a single click, ensuring seamless integration and minimal downtime.",
      variant: "right" as const,
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  const isActive = (id: number) => active === id;

  return (
    <section className="w-full h-screen bg-gray-100 dark:bg-neutral-800">
      <div className="mx-auto w-full h-full max-w-5xl px-4 py-20">
        <div className="mb-12">
          <h1 className="text-4xl text-center font-bold text-neutral-700 tracking-tight">
            Build faster with AI
          </h1>
          <p className="mx-auto max-w-lg text-lg text-center text-neutral-600 mt-4">
            Supercharge your development workflow with intelligent tools that
            understands your code.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              onMouseEnter={() => setActive(feature.id)}
              onMouseLeave={() => setActive(null)}
              key={feature.id + feature.title}
              className={cn(
                "p-8 bg-white rounded-2xl transition-all duration-150",
                isActive(feature.id) &&
                  "shadow-sm shadow-black/10 ring-1 ring-black/10",
              )}
            >
              <div className="h-60 flex flex-col">
                <IsometricBox
                  variant={feature.variant}
                  isActive={isActive(feature.id)}
                />
              </div>
              <div className="mt-6">
                <h2 className="font-medium text-center text-lg text-neutral-700">
                  {feature.title}
                </h2>
                <p className="text-sm text-center text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

  const getStrokeColor = (face: "top" | "left" | "right") => {
    if (face !== variant || !isActive) {
      return "var(--color-neutral-200)";
    }
    switch (face) {
      case "left":
        return "var(--color-blue-500)";
      case "right":
        return "var(--color-blue-500)";
      case "top":
        return "var(--color-blue-500)";
    }
  };

  // const STROKE = isActive ? "var(--color-sky-500)" : "var(--color-neutral-200)";

  return (
    <motion.div animate={isActive ? "animate" : "initial"} initial="initial">
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
          stroke={getStrokeColor("top")}
          strokeWidth="1.5"
        />

        {/* Inner rounded rectangle on top */}
        <motion.path
          variants={getVariants("top")}
          transition={TRANSITION}
          d="M100 52 Q105 52 132 68 Q138 72 132 76 Q105 92 100 92 Q95 92 68 76 Q62 72 68 68 Q95 52 100 52 Z"
          className="fill-white dark:fill-neutral-950"
          stroke={getStrokeColor("top")}
          strokeWidth="1"
        />

        {/* Left face */}
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M45 76 L100 104 L100 164 Q100 170 92 166 L45 140 Q38 136 38 128 L38 80 Q38 72 45 76 Z"
          className="fill-neutral-100 dark:fill-neutral-950"
          stroke={getStrokeColor("left")}
          strokeWidth="1.5"
        />

        {/* Right face */}
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M155 76 L100 104 L100 164 Q100 170 108 166 L155 140 Q162 136 162 128 L162 80 Q162 72 155 76 Z"
          className="fill-neutral-50 dark:fill-neutral-900"
          stroke={getStrokeColor("right")}
          strokeWidth="1.5"
        />

        {/* Vertical lines on left face */}
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M55 86 L55 145"
          stroke={getStrokeColor("left")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M70 95 L70 155"
          stroke={getStrokeColor("left")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("left")}
          transition={TRANSITION}
          d="M85 104  L85 162"
          stroke={getStrokeColor("left")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />

        {/* Vertical lines on right face */}
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M145 86 L145 145"
          stroke={getStrokeColor("right")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M130 95 L130 155"
          stroke={getStrokeColor("right")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
        <motion.path
          variants={getVariants("right")}
          transition={TRANSITION}
          d="M115 104 L115 162"
          stroke={getStrokeColor("right")}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 3"
        />
      </motion.svg>
    </motion.div>
  );
};
