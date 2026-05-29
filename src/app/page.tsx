import { ToggleTheme } from "@/components/toggle-theme-btn";
import { cn } from "@/lib/utils";
import { DragCard } from "@/components/drag-card";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center w-full items-center bg-gray-100 dark:bg-neutral-950 font-sans">
      <ToggleTheme className="absolute top-5 right-5" />
      <DragCard />
    </div>
  );
}
