import { AceBento } from "@/components/ace-bento";
import { ToggleThemeBtn } from "@/components/toggle-theme-btn";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-white dark:bg-neutral-950">
      <ToggleThemeBtn className="absolute top-5 right-5" />
      <AceBento />
    </div>
  );
}
