import { cn } from "@/lib/utils";

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoPara = ({ children, className }: ParaProps) => {
  return (
    <p
      className={cn(
        "text-sm text-neutral-500 max-w-sm mt-4 font-outfit font-normal",
        className,
      )}
    >
      {children}
    </p>
  );
};
