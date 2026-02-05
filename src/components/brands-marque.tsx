"use client";
import React from "react";
import { motion } from "motion/react";

export interface BrandProps {
  brandIcon: React.ReactElement;
  brandName: string;
}

export interface BrandsMarqueProps {
  direction: "left" | "right";
  brand: BrandProps[];
}

export const BrandsMarque = ({ brand, direction }: BrandsMarqueProps) => {
  return (
    <motion.div
      animate={{
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex gap-4 items-center justify-center w-full mx-5 mb-10"
    >
      {brand.map(({ brandIcon, brandName }: BrandProps, idx: number) => (
        <div
          key={idx}
          className="flex gap-1 items-center justify-between px-5 mx-auto py-1 w-40 shadow-ace rounded-sm"
        >
          <div className="size-4 shrink-0">{brandIcon}</div>
          <p className="text-sm font-outfit leading-none whitespace-nowrap w-full">
            {brandName}
          </p>
        </div>
      ))}
    </motion.div>
  );
};
