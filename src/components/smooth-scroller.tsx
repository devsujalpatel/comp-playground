"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ReactLenis, type LenisRef } from "lenis/react";
type SmoothScrollerProps = {
  children: ReactNode;
};

export const SmoothScroller = ({ children }: SmoothScrollerProps) => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis ref={lenisRef} options={{ autoRaf: false }} root>
      {children}
    </ReactLenis>
  );
};
