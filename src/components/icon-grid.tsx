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
    col: "col-start-2",
    row: "row-start-2",
  },
  {
    name: "React",
    src: "https://codersgyan.com/icons/icon-react.svg",
    col: "col-start-4",
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
    col: "col-start-5",
    row: "row-start-5",
  },
];

export default function IconGrid() {
  return (
    <div className="min-h-screen grid place-items-center bg-radial-dark">
      <div className="grid grid-cols-5 grid-rows-5 gap-5">
        {techs.map((t) => (
          <div
            key={t.name}
            className={`
              relative ${t.col} ${t.row}
              h-28 w-28
              border border-dashed border-white/15
              bg-white/3
              backdrop-blur-md
              grid place-items-center
              transition-all duration-300
              hover:-translate-y-1 hover:scale-105
              hover:border-white/40
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            `}
          >
            <Image
              src={t.src}
              alt={t.name}
              width={44}
              height={44}
              draggable={false}
              className="opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
