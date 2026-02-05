import { cn } from "@/lib/utils";

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoHeaderCard = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={cn("flex flex-col p-4 items-start w-full", className)}>
      {children}
    </div>
  );
};
