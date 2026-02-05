"use client";
import Marquee from "react-fast-marquee";

export interface BrandProps {
  brandIcon: React.ReactElement;
  brandName: string;
}

export interface BrandsMarqueProps {
  direction: "left" | "right";
  brand: BrandProps[];
  isHovered?: boolean;
}

export const BrandsMarque = ({
  brand,
  direction,
  isHovered,
}: BrandsMarqueProps) => {
  return (
    <Marquee
      speed={50}
      play={isHovered}
      direction={direction}
      className="mx-5 py-6 z-20"
    >
      {brand.map(({ brandIcon, brandName }: BrandProps, idx: number) => (
        <div
          key={idx}
          className="flex gap-1 items-center justify-between px-5 py-1 shadow-ace rounded-sm mx-4"
        >
          <div className="size-4 shrink-0">{brandIcon}</div>
          <p className="text-sm font-outfit leading-none whitespace-nowrap w-full">
            {brandName}
          </p>
        </div>
      ))}
    </Marquee>
  );
};
