import { ToggleTheme } from "@/components/toggle-theme-btn";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 dark:bg-neutral-900 [--pattern-color:var(--color-red-500)] dark:[--pattern-color:var(--color-green-500)]">
      <ToggleTheme className="absolute top-5 right-5" />
      <div
        className={cn(
          "size-80 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 flex items-center justify-center bg-white dark:bg-neutral-800 dark:shadow-white dark:ring-white",
          "bg-[repeating-linear-gradient(45deg,var(--pattern-color)_0,var(--pattern-color)_1px,transparent_0,transparent_50%)]",
          "bg-size-[10px_10px]",
        )}
      ></div>
    </div>
  );
}
