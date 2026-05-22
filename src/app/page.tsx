import { ToggleTheme } from "@/components/toggle-theme-btn";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-200 dark:bg-neutral-900">
      <ToggleTheme className="absolute top-5 right-5" />
      <div>

        <div
          className={cn(
            "size-80 rounded-md shadow-sm shadow-black/10 ring-1 ring-black/10 flex items-center justify-center bg-priamry dark:bg-secondary"
          )}
        ></div>
      </div>
    </div>
  );
}
