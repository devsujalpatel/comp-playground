"use client";

import { brands, brands2, brands3 } from "@/constants";
import { CloudIcon, Code2Icon } from "lucide-react";
// import { motion } from "motion/react";
import { useState } from "react";
import { BrandsMarque } from "../brands-marque";

export const SecondCard = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="row-span-2 relative flex flex-col items-center justify-center group shadow-ace rounded-xl overflow-hidden"
    >
      {/* Headee */}
      <div className="flex z-20 flex-col p-4 items-start w-full">
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
      {/* Marques */}
      <BrandsMarque brand={brands} direction="left" isHovered={hovered} />
      <BrandsMarque brand={brands2} direction="right" isHovered={hovered} />
      <BrandsMarque brand={brands3} direction="left" isHovered={hovered} />
      {/* MiniWindow */}
      <div className="w-[50%] overflow-hidden lg:w-42  h-30 rounded-t-md border border-b-0 mt-4 border-neutral-200 z-30">
        {/* Header */}
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
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "0rem", height: "0rem", opacity: 1 }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "4rem", height: "4rem", opacity: "0.9" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "8rem", height: "8rem", opacity: "0.8" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "12rem", height: "12rem", opacity: "0.7" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "16rem", height: "16rem", opacity: "0.6" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "20rem", height: "20rem", opacity: "0.5" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "24rem", height: "24rem", opacity: "0.4" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "28rem", height: "28rem", opacity: "0.3" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "32rem", height: "32rem", opacity: "0.2" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2  rounded-full border border-slate-200"
          style={{ width: "36rem", height: "36rem", opacity: "0.1" }}
        />
      </div>
    </div>
  );
};
