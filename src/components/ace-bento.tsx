import { AppWindowMac } from "lucide-react";

export const AceBento = () => {
  return (
    <div className="flex flex-col items-center p-2 w-7xl h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 gap-5 antialiased max-w-7xl mx-auto items-start justify-start w-full">
        <div className="lg:col-span-2 bg-red-300">
          <div className="flex flex-col p-2">
            <div>
              <AppWindowMac />
            </div>
            <h2>Website design and development</h2>
            <p>
              We'll build you a website that's so good, it'll make all the other
              websites jealous. Trust me, not kidding.
            </p>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="bg-green-200 row-span-2"></div>

        <div className="bg-blue-200 row-span-2"></div>

        <div className="bg-yellow-200"></div>
        <div className="lg:col-span-2 row-span-2 bg-emerald-200"></div>
      </div>
    </div>
  );
};
