import { ToggleTheme } from "@/components/toggle-theme-btn";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100 dark:bg-neutral-950 font-sans">
      <ToggleTheme className="absolute top-5 right-5" />
      <div className="border-y border-neutral-200 px-4 bg-white w-full dark:bg-neutral-900 dark:border-neutral-800 py-20">

        <div
          className={cn(
            "flex flex-col items-start gap-4 max-w-brand mx-auto"
          )}
        >
          <h1 className="text-2xl font-medium tracking-tight">Welcome to the jungle</h1>
          <p className="text-neutral-500 text-base max-w-sm">Jungle offers the best AI agents in town with single click. Try for free today.</p>
          <button className="bg-black text-white px-4 py-2 rounded-md text-m">Get started for free</button>
        </div>
      </div>
    </div>
  );
}
