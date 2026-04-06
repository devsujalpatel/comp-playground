"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

type TextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const TextEffect = ({ children, className, delay = 0 }: TextProps) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const text = textRef.current;
      if (!text) return;

      const split = SplitText.create(text, { type: "words", mask: "words" });

      gsap.set(split.words, { opacity: 0, yPercent: 110 });

      gsap.to(split.words, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.inOut",
        duration: 1,
        delay,
      });
    },
    { dependencies: [children, delay] },
  );

  return (
    <div ref={textRef} className={cn("text-4xl", className)}>
      {children}
    </div>
  );
};
