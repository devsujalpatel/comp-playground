import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoHeading = ({ children, className }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "text-lg font-semibold bg-clip-text mt-4 text-transparent bg-linear-to-b from-neutral-700 to-neutral-500",
        className,
      )}
    >
      {children}
    </h2>
  );
};
