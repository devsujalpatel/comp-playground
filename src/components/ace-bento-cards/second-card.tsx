"use client";

import { brands, brands2, brands3, rings } from "@/constants";
import { CloudIcon, Code2Icon } from "lucide-react";
// import { motion } from "motion/react";
import { useState } from "react";
import { BrandsMarque } from "../brands-marque";
import { BentoHeading } from "../util-comps/bento-heading";
import { BentoPara } from "../util-comps/bento-para";
import { BentoIcon } from "../util-comps/bento-icon";
import { BentoHeaderCard } from "../util-comps/bento-header-card";

export const SecondCard = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="row-span-2 relative flex flex-col items-center justify-start group shadow-ace rounded-xl overflow-hidden h-full"
    >
      {/* Headee */}
      <BentoHeaderCard className="mb-6">
        <BentoIcon>
          <CloudIcon className="size-3.5" />
        </BentoIcon>
        <BentoHeading>Hosting, deployment and maintenance</BentoHeading>
        <BentoPara>
          We'll Get your website out there in the world, where it belongs, with
          our lightning-fast deployment services.
        </BentoPara>
      </BentoHeaderCard>
      {/* Marques */}
      <BrandsMarque brand={brands} direction="left" isHovered={hovered} />
      <BrandsMarque brand={brands2} direction="right" isHovered={hovered} />
      <BrandsMarque brand={brands3} direction="left" isHovered={hovered} />
      {/* MiniWindow */}
      <div className="w-[50%] overflow-hidden lg:w-42  h-30 mt-2 rounded-t-md border border-b-0 border-neutral-200 z-30 shadow-ace">
        <div className="flex items-center justify-start gap-1 p-1 px-2 border-b bg-neutral-50 rounded-t-md border-neutral-200">
          <div className="w-1 h-1 rounded-full bg-red-400" />
          <div className="w-1 h-1 rounded-full bg-yellow-400" />
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
        </div>
        <div className="flex justify-center bg-white items-center w-full h-full">
          <div className="bg-black text-white rounded-full p-2 mb-2">
            <Code2Icon className="size-6" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center z-10">
       {rings.map((ring, idx) => (
        <div
          key={idx}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border border-slate-200"
          style={{
            width: `${ring.size}rem`,
            height: `${ring.size}rem`,
            opacity: ring.opacity,
          }}
        />
      ))}
        <div
          className=" absolute left-1/2 -top-32 -translate-x-1/2 w-80 h-80 rounded-full bg-violet-300 opacity-20
    blur-3xl z-50"
        />
      </div>
    </div>
  );
};
