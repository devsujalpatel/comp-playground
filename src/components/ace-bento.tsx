import { FirstCard } from "./ace-bento-cards/first-card";
import { SecondCard } from "./ace-bento-cards/second-card";

export const AceBento = () => {
  return (
    <div className="flex flex-col items-center p-2 w-7xl h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 auto-rows-auto gap-5 antialiased max-w-7xl p-5 mx-auto items-start justify-start w-full">
        {/*  First Grid Card */}
        <FirstCard />

        <SecondCard />

        <div className="bg-blue-200 row-span-2"></div>

        <div className="bg-yellow-200"></div>
        <div className="lg:col-span-2 row-span-2 bg-emerald-200"></div>
      </div>
    </div>
  );
};
