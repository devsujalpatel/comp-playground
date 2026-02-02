"use client";

import Image from "next/image";

const techs = [
  {
    name: "MongoDB",
    src: "https://codersgyan.com/icons/icon-mongodb.svg",
    col: "col-start-3",
    row: "row-start-1",
  },
  {
    name: "Angular",
    src: "https://codersgyan.com/icons/icon-angular.svg",
    col: "col-start-5",
    row: "row-start-2",
  },
  {
    name: "Nginx",
    src: "https://codersgyan.com/icons/icon-nginx.svg",
    col: "col-start-1",
    row: "row-start-2",
  },
  {
    name: "React",
    src: "https://codersgyan.com/icons/icon-react.svg",
    col: "col-start-3",
    row: "row-start-3",
  },
  {
    name: "Express",
    src: "https://codersgyan.com/icons/icon-express.svg",
    col: "col-start-1",
    row: "row-start-4",
  },
  {
    name: "Ruby",
    src: "https://codersgyan.com/icons/icon-ruby.svg",
    col: "col-start-4",
    row: "row-start-4",
  },
  {
    name: "Docker",
    src: "https://codersgyan.com/icons/icon-docker.svg",
    col: "col-start-3",
    row: "row-start-5",
  },
  {
    name: "Next.js",
    src: "https://codersgyan.com/icons/icon-next.svg",
    col: "col-start-6",
    row: "row-start-5",
  },
  {
    name: "Next.js",
    src: "https://codersgyan.com/icons/icon-node.svg",
    col: "col-start-6",
    row: "row-start-3",
  },
  {
    name: "Empty",
    col: "col-start-4",
    row: "row-start-2",
    className: "opacity-70",
  },
  {
    name: "Empty",
    col: "col-start-2",
    row: "row-start-3",
    className: "opacity-70",
  },
  {
    name: "Empty",
    col: "col-start-4",
    row: "row-start-3",
    className: "opacity-70",
  },
  {
    name: "Empty",
    col: "col-start-5",
    row: "row-start-5",
    className: "opacity-70",
  },
];

export default function IconGrid() {
  return (
    <div className="min-h-screen grid place-items-center bg-radial-dark">
      <div className="grid grid-cols-6 grid-rows-5 mask-b-from-70% to-100%">
        {techs.map((t, idx) => (
          <div
            key={idx}
            className={`
              relative ${t.col} ${t.row}
              h-24 w-24
              border border-dashed border-white/10
              bg-neutral-100/1
              backdrop-blur-md
              grid place-items-center
              transition-all duration-300
              ${t.className ?? ""}
            `}
          >
            {t.src && (
              <>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-14 w-14 rounded-full bg-white/5 blur-xl opacity-30" />
                </div>

                <Image
                  src={t.src}
                  alt={t.name}
                  width={44}
                  height={44}
                  draggable={false}
                  className="relative z-10 opacity-80 drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
