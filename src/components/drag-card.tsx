"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

type StackItem = {
  title: string;
  description: string;
  src: string;
};
const INITIAL_STACK: StackItem[] = [
  {
    title: "India",
    description: "Mountains, lakes, and chocolate",
    src: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Japan",
    description: "Temples, neon lights, and sushi",
    src: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Switzerland",
    description: "Alps, trains, and scenic valleys",
    src: "https://images.unsplash.com/photo-1516490701444-1daf45984537?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Italy",
    description: "Historic cities and amazing cuisine",
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Norway",
    description: "Fjords, northern lights, and nature",
    src: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const DragCard = () => {
  const [stack, setStack] = useState<StackItem[]>(INITIAL_STACK);
  return (
    <div className="relative flex h-96 w-80 items-center justify-center">
      {stack.map((item, index) => (
        <StackedCard
          key={item.title}
          item={item}
          index={index}
          total={stack.length}
          onSendToBack={
            index === 0
              ? () => setStack((prev) => [...prev.slice(1), prev[0]])
              : undefined
          }
        />
      ))}
    </div>
  );
};

const STACK_SPRING: any = {
  type: "spring",
  stiffness: 380,
  damping: 32,
};

const StackedCard = ({
  item,
  index,
  total,
  onSendToBack,
}: {
  item: StackItem;
  index: number;
  total: number;
  onSendToBack: (() => void) | undefined;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-12, 12]);
  const isTop = index === 0;
  return (
    <motion.div
      drag={isTop ? "x" : false}
      dragConstraints={{ left: -150, right: 150 }}
      dragElastic={0.08}
      onDragEnd={() => {
        if (!isTop || !onSendToBack) return;
        onSendToBack();
        animate(x, 0, STACK_SPRING);
      }}
      style={{ zIndex: total - index, rotate, x }}
      animate={{
        y: `${-index * 5}%`,
        scale: 1 - index * 0.05,
      }}
      transition={STACK_SPRING}
      className="absolute inset-0 cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.title}
        className="pointer-events-none h-full min-h-96 w-full rounded-xl select-none object-cover"
      />
      <h2 className="absolute bottom-10 left-4 font-bold text-xl text-white z-20">
        {item.title}
      </h2>
      <p className="absolute bottom-5 left-4 text-sm text-white/60 z-20">
        {item.description}
      </p>
      <div className="absolute inset-0 h-full w-full bg-black/30 mask-t-from-50% rounded-xl"></div>
    </motion.div>
  );
};
