"use client";

import { brands } from "@/constants";
import { CloudIcon } from "lucide-react";
// import { motion } from "motion/react";
import { useState } from "react";
import { BrandsMarque } from "../brands-marque";

export const SecondCard = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="row-span-2 flex flex-col items-center justify-center group shadow-ace rounded-xl overflow-hidden"
    >
      {/* Headee */}
      <div className="flex flex-col p-4 items-start w-full">
        <div className="bg-black flex justify-center items-center size-8 text-white p-2 rounded-full">
          <CloudIcon className="size-3.5" />
        </div>
        <h2 className="text-lg font-semibold bg-clip-text mt-4 text-transparent bg-linear-to-b from-neutral-700 to-neutral-500">
          Hosting, deployment and maintenance
        </h2>
        <p className="text-sm text-neutral-500 max-w-sm mt-4 font-outfit font-normal ">
          We'll Get your website out there in the world, where it belongs, with
          our lightning-fast deployment services.
        </p>
      </div>
      <BrandsMarque brand={brands} direction="left" isHovered={hovered} />
      <div></div>
    </div>
  );
};
