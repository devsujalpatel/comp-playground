import { BrandProps } from "@/components/brands-marque";
import RedisIcon from "@/components/icons/redis";
import VercelIcon from "@/components/icons/vercel";
import TailwindIcon from "@/components/icons/tailwind";
import FramerIcon from "@/components/icons/framer";
import AwsIcon from "@/components/icons/aws";
import GithubIcon from "@/components/icons/github";
import DockerIcon from "@/components/icons/docker";
import DigitalOceanIcon from "@/components/icons/digital-ocean";

export const brands: BrandProps[] = [
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
    brandIcon: <GithubIcon className="size-4" />,
    brandName: "Github",
  },
  {
    brandIcon: <DockerIcon className="size-4" />,
    brandName: "Docker",
  },
  {
    brandIcon: <DigitalOceanIcon />,
    brandName: "Digital Ocean",
  },
];
export const brands2: BrandProps[] = [
  {
    brandIcon: <RedisIcon className="size-4" />,
    brandName: "Redis",
  },

  {
    brandIcon: <TailwindIcon className="size-4" />,
    brandName: "Tailwind CSS",
  },
  {
    brandIcon: <DigitalOceanIcon />,
    brandName: "Digital Ocean",
  },
  {
    brandIcon: <GithubIcon className="size-4" />,
    brandName: "Github",
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
  {
    brandIcon: <DockerIcon className="size-4" />,
    brandName: "Docker",
  },
];
export const brands3: BrandProps[] = [
  {
    brandIcon: <FramerIcon className="size-4" />,
    brandName: "Framer Motion",
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
    brandIcon: <GithubIcon className="size-4" />,
    brandName: "Github",
  },
  {
    brandIcon: <RedisIcon className="size-4" />,
    brandName: "Redis",
  },
  {
    brandIcon: <DigitalOceanIcon />,
    brandName: "Digital Ocean",
  },
  {
    brandIcon: <DockerIcon className="size-4" />,
    brandName: "Docker",
  },
  {
    brandIcon: <AwsIcon className="size-4" />,
    brandName: "AWS",
  },
];


export type RingConfig = {
  size: number 
  opacity: number
}

export const rings: RingConfig[] = [
  { size: 0, opacity: 1 },
  { size: 4, opacity: 0.9 },
  { size: 8, opacity: 0.8 },
  { size: 12, opacity: 0.7 },
  { size: 16, opacity: 0.6 },
  { size: 20, opacity: 0.5 },
  { size: 24, opacity: 0.4 },
  { size: 28, opacity: 0.3 },
  { size: 32, opacity: 0.2 },
  { size: 36, opacity: 0.1 },
]
