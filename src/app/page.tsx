import { ToggleTheme } from "@/components/toggle-theme-btn";
import { cn } from "@/lib/utils";
import { InteractiveAddresses } from "@/components/interactive-addresses";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center w-full items-center bg-white dark:bg-neutral-950 font-sans">
      <ToggleTheme className="absolute top-5 right-5" />
      <InteractiveAddresses email="sujal@sujalpatel.tech" />
    </div>
  );
}
