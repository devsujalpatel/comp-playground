import { cn } from "@/lib/utils";

interface IconProp {
  children: React.ReactNode;
  className?: string;
}

export const BentoIcon = ({ children, className }: IconProp) => {
  return (
    <div
      className={cn(
        "bg-black flex justify-center items-center size-8 text-white p-2 rounded-full",
        className,
      )}
    >
      {children}
    </div>
  );
};
