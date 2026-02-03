import { AppWindowMac } from "lucide-react";

export const AceBento = () => {
  return (
    <div className="flex flex-col items-center p-2 w-7xl h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 auto-rows-auto gap-5 antialiased max-w-7xl p-5 mx-auto items-start justify-start w-full">
        {/*  First Grid Card */}
        <div className="lg:col-span-2 shadow-ace rounded-xl flex justify-center items-start">
          {/* First Section */}
          <div className="flex flex-col p-4 items-start w-full">
            <div className="bg-black flex justify-center items-center size-8 text-white p-2 rounded-full">
              <AppWindowMac className="size-3.5" />
            </div>
            <h2 className="text-lg font-semibold bg-clip-text mt-4 text-transparent bg-linear-to-b from-neutral-700 to-neutral-500">
              Website design and <br /> development
            </h2>
            <p className="text-sm text-neutral-500 max-w-sm mt-4 font-outfit font-normal ">
              We'll build you a website that's so good, it'll make all the other
              websites jealous. Trust <br /> me, not kidding.
            </p>
          </div>
          {/* Second Section */}
          <div className="w-full flex items-center justify-center lg:pt-4 lg:pr-4 px-4">
            {/* Mobile */}
            <div className="w-40 h-60 border-4 border-b-0 border-neutral-100 rounded-t-xl flex flex-col items-center p-4">
              {/* Header */}
              <div className="w-16 h-4 rounded-full bg-neutral-100 flex items-center justify-end p-1">
                <div className="bg-neutral-200 rounded-full w-2 h-2"></div>
              </div>
              {/* Middle */}
              <div className="flex flex-col item-center justify-center mt-16">
                <h3 className="text-xs text-center font-semibold bg-clip-text text-transparent bg-linear-to-br from-gray-700 to-gray-500">
                  Websites that <br /> stand out and <br /> make a difference
                </h3>
                <div className="flex text-[6px] space-x-2 mt-4 items-center justify-center">
                  <button className="bg-linear-to-br from-purple-500 rounded-xs to-indigo-600 w-14 text-white px-2 py-1 text-center">
                    Get started
                  </button>
                  <button className="border border-neutral-400 rounded-xs w-14 text-black px-2 py-1 text-center">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            {/* Desktop */}
            <div className="w-[90%] overflow-hidden lg:w-72 ml-4 h-60 rounded-t-md border border-b-0 border-neutral-200">
              {/* Header */}
              <div className="flex items-center  justify-start gap-1 p-1 px-2 border-b bg-neutral-50 rounded-t-md border-neutral-200">
                <div className="w-1 h-1 rounded-full bg-red-400" />
                <div className="w-1 h-1 rounded-full bg-yellow-400" />
                <div className="w-1 h-1 rounded-full bg-emerald-400" />
              </div>
              <div className="bg-[radial-gradient(#314158_1px,transparent_1px)] bg-slate-950 bg-size-[16px_16px] w-full h-full"></div>
            </div>
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
