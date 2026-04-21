import { cn } from "@/lib/utils";

const HeroWithScales = () => {
  return (
    <section className="relative h-screen w-full bg-gray-100 overflow-hidden font-sans [--pattern:var(--color-neutral-300)]">
      <div className="max-w-7xl mx-auto w-full h-full relative flex justify-center items-center">
        <HorizontalScales className="absolute w-screen top-0  mx-auto" />
        <HorizontalScales className="absolute w-screen bottom-0  mx-auto" />
        <VerticalScale className="absolute h-screen left-0  mx-auto" />
        <VerticalScale className="absolute h-screen right-0  mx-auto" />

        <div className="p-10 size-full">
          <div className="relative p-10 shadow-2xl size-full flex flex-col justify-between">
            <img
              src="https://assets.aceternity.com/components/mountains-snow.webp"
              className="absolute inset-0 w-full h-full object-cover z-0 mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
              alt="mountain image"
            />
            <nav className="flex items-center justify-between z-999">
              <div className="flex items-center gap-6">
                <h2 className="tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-blue-400 to-blue-800 text-shadow-lg text-shadow-blue-500/10 font-bold text-lg px-4 py-2">
                  clonely
                </h2>
                <a href="#" className="text-neutral-700 text-xs">
                  Features
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Pricing
                </a>
                <a href="#" className="text-neutral-700 text-xs">
                  Changelog
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-linear-to-t text-neutral-700  text-xs">
                  read documentation
                </button>
                <button className="px-4 py-2 rounded-md bg-linear-to-t from-blue-700 to-blue-500 text-white text-shadow-lg text-shadow-black/2 text-xs">
                  Try for free
                </button>
              </div>
            </nav>
            <div className="flex flex-col pb-10 relative z-20">
              <h1 className="tracking-tight text-neutral-950 text-7xl font-medium max-w-4xl">
                The only AI capable of deep cloning voice.
              </h1>
              <p className="tracking-tight text-neutral-700 text-2xl max-w-2xl mt-8">
                Pass in URL, and Deepclone AI will clone the voice of the person
                in the video. Try for free, no credit card required.
              </p>
              <div className="flex items-center gap-2 mt-8 relative z-20">
                <button className="px-4 py-2 rounded-md bg-linear-to-t from-blue-700 to-blue-500 text-white text-shadow-lg text-shadow-black/2 cursor-pointer active:scale-98 transition duration-200">
                  Try for free
                </button>
                <button className="px-4 py-2 bg-linear-to-t text-neutral-700  cursor-pointer active:scale-98 transition duration-200">
                  read documentation
                </button>
              </div>
            </div>

            <Line className="mask-b-from-10% absolute top-0 inset-x-0" />
            <Line className="mask-t-from-10% absolute bottom-0 inset-x-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithScales;

const Line = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_0.5rem)]",
        className,
      )}
    />
  );
};

const HorizontalScales = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border[var(--pattern)]",
        className,
      )}
    />
  );
};

const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-10 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0px,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-x border[var(--pattern)]",
        className,
      )}
    />
  );
};
