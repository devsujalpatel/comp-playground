import { CloudIcon } from "lucide-react";
import { BrandProps, BrandsMarque } from "../brands-marque";
import RedisIcon from "../icons/redis";
import VercelIcon from "../icons/vercel";
import TailwindIcon from "../icons/tailwind";
import FramerIcon from "../icons/framer";
import AwsIcon from "../icons/aws";

const brands: BrandProps[] = [
  {
    brandIcon: <RedisIcon className="size-4" />,
    brandName: "Redis",
  },
  {
    brandIcon: <VercelIcon className="size-4" />,
    brandName: "Vercel",
  },
  {
    brandIcon: <TailwindIcon className="size-4" />,
    brandName: "Tailwind CSS",
  },
  {
    brandIcon: <FramerIcon className="size-4" />,
    brandName: "Framer Motion",
  },
  {
    brandIcon: <AwsIcon className="size-4" />,
    brandName: "AWS",
  },
  {
    brandIcon: <VercelIcon className="size-4" />,
    brandName: "Vercel",
  },
];

export const SecondCard = () => {
  return (
    <div className="row-span-2 flex flex-col items-center justify-center shadow-ace rounded-xl overflow-hidden">
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
      <BrandsMarque brand={brands} direction="left" />
      <div></div>
    </div>
  );
};
