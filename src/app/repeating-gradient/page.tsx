import { cn } from "@/lib/utils";
import React from "react";

const HeroWithScales = () => {
  return (
    <section className="relative h-screen w-full bg-neutral-100 overflow-hidden [--pattern:var(--color-neutral-300)]">
      <div className="max-w-7xl mx-auto w-full h-full relative flex justify-center items-center">
        <HorizontalScales className="absolute w-screen top-0  mx-auto" />
        <HorizontalScales className="absolute w-screen bottom-0  mx-auto" />
        <VerticalScale className="absolute h-screen left-0  mx-auto" />
        <VerticalScale className="absolute h-screen right-0  mx-auto" />

        <div className="p-10 size-full">
          <div className="relative p-10 size-full">
            <Line className="mask-b-from-10% absolute top-0 inset-x-0" />
            <Line className="mask-t-from-10% absolute bottom-0 inset-x-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithScales;

const Line = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};

const HorizontalScales = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border[var(--pattern)]",
        className,
      )}
    />
  );
};

const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-10 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-x border[var(--pattern)]",
        className,
      )}
    />
  );
};
