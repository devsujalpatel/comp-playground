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
