"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Card {
  title: string;
  desc: string;
  skeleton: React.ReactNode;
  className: string;
  config: {
    y: number;
    x: number;
    rotate: number;
    zIndex: number;
  };
}

export const HoverCards = () => {
  const cards: Card[] = [
    {
      title: "Working Knowledge",
      desc: "Practical understanding of technologies and concepts applied in real-world projects.",
      skeleton: (
        <div className="h-50 rounded-lg bg-linear-to-r from-orange-600 to-orange-600/60 w-full"></div>
      ),
      className: "bg-orange-500",
      config: {
        y: -20,
        x: 0,
        rotate: -15,
        zIndex: 2,
      },
    },
    {
      title: "Deep Expertise",
      desc: "In-depth knowledge and mastery of specialized domains and technologies.",
      skeleton: (
        <div className="h-50 rounded-lg bg-linear-to-r from-neutral-300 to-stone-300/60 w-full"></div>
      ),
      className: "bg-stone-200 [&_h2]:text-black",
      config: {
        y: 20,
        x: 180,
        rotate: -8,
        zIndex: 3,
      },
    },
    {
      title: "Problem Solving",
      desc: "Ability to analyze complex challenges and implement effective solutions.",
      skeleton: (
        <div className="h-50 rounded-lg bg-linear-to-r from-blue-600 to-blue-600/60 w-full"></div>
      ),
      className: "bg-blue-500",
      config: {
        y: -80,
        x: 360,
        rotate: -5,
        zIndex: 4,
      },
    },
    {
      title: "Continuous Learning",
      desc: "Commitment to staying updated with emerging trends and best practices.",
      skeleton: (
        <div className="h-50 rounded-lg bg-linear-to-r from-purple-600 to-purple-600/60 w-full"></div>
      ),
      className: "bg-purple-500",
      config: {
        y: 20,
        x: 540,
        rotate: 12,
        zIndex: 5,
      },
    },
    {
      title: "Team Collaboration",
      desc: "Strong communication and cooperation skills with cross-functional teams.",
      skeleton: (
        <div className="h-50 rounded-lg bg-linear-to-r from-rose-600 to-rose-600/60 w-full"></div>
      ),
      className: "bg-rose-500",
      config: {
        y: 20,
        x: 720,
        rotate: -5,
        zIndex: 6,
      },
    },
  ];

  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const isAnyCardActive = () => active?.title;

  const isCurrentActive = (card: Card) => active?.title === card.title;

  

  return (
    <div ref={ref} className="max-w-5xl mx-auto w-full h-160 relative">
      {cards.map((card, index) => (
        <motion.div key={index}>
          <motion.button
            onClick={() => setActive(card)}
            initial={{
              y: 400,
              x: 0,
              scale: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: card.config.y,
              x: card.config.x,
              zIndex: card.config.zIndex,
              rotate: card.config.rotate,
              scale: 1,
              width: 320,
              height: 400,
              filter: "blur(0px)",
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className={cn(
              "w-80 p-8 absolute inset-0 rounded-2xl flex flex-col items-start justify-between overflow-hidden cursor-pointer",
              card.className,
            )}
          >
            {card.skeleton}
            <div>
              <h2 className="text-2xl font-bold text-white font-signika text-left">
                {card.title}
              </h2>
            </div>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};
