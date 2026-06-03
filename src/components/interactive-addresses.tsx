"use client";
import { cn } from "@/lib/utils";
import { IconBrandX } from "@tabler/icons-react";
import { GlobeIcon, type LucideProps, Mail, UserIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, type JSX } from "react";

type HighlightType = "name" | "website" | "email" | "x";

export const InteractiveAddresses = ({
  email = "sujal@sujalpatel.tech",
}: {
  email?: string;
}) => {
  const icons: {
    type: HighlightType;
    label: string;
    Icon: React.ComponentType<LucideProps>;
  }[] = [
    {
      type: "name" as HighlightType,
      label: "Name",
      Icon: UserIcon,
    },
    {
      type: "website" as HighlightType,
      label: "Website",
      Icon: GlobeIcon,
    },
    {
      type: "email" as HighlightType,
      label: "Email",
      Icon: Mail,
    },
    {
      type: "x" as HighlightType,
      label: "Twitter",
      Icon: IconBrandX,
    },
  ];
  const [highlight, setHighlight] = useState<HighlightType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const atRef = useRef<HTMLSpanElement>(null);
  const domainRef = useRef<HTMLSpanElement>(null);
  const extRef = useRef<HTMLSpanElement>(null);

  const [emailName, emailDomain] = email.split("@"); // emailName -> "sujal", emailDomain -> "sujalpatel.tech"
  const domainParts = emailDomain.split("."); // domainParts -> ["sujalpatel", "tech"]
  const domainName = domainParts[0];
  const domainExt = domainParts.slice(1).join("."); // domainExt -> "tech"

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* {Main address display} */}
      <div className="relative flex min-h-28 flex-col items-center">
        <div
          ref={containerRef}
          className="relative flex items-center justify-center text-3xl font-medium tracking-tight md:text-4xl"
        >
          <TextSegment>{emailName}</TextSegment>
          <TextSegment>@</TextSegment>
          <TextSegment>{domainName}</TextSegment>
          <TextSegment>.{domainExt}</TextSegment>
        </div>
      </div>

      {/* Icons Container / row */}
      <div className="mt-4 flex items-center">
        {icons.map(({ type, label, Icon }) => (
          <motion.button
            key={type}
            onMouseEnter={() => setHighlight(type)}
            onMouseLeave={() => setHighlight(null)}
            className="relative rounded-lg p-2 transition-colors "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon
              className="size-5 transition-colors duration-150"
              strokeWidth={1.5}
            ></Icon>
            <AnimatePresence>
              {highlight === type && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 -z-10 rounded-lg bg-neutral-300/10"
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const TextSegment = ({
  children,
  isActive,
  isBlurred,
  segmentRef,
}: TextSegmentProps) => {
  return (
    <motion.span
      ref={segmentRef as React.RefObject<HTMLSpanElement>}
      animate={{
        filter: isBlurred ? "blur(4px)" : "blur(0px",
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "tracking-tight",
        isActive ? "text-neutral-900" : "text-neutral-400",
      )}
    >
      {children}
    </motion.span>
  );
};

interface TextSegmentProps {
  children: React.ReactNode;
  isActive: boolean;
  isBlurred: boolean;
  segmentRef: React.RefObject<HTMLSpanElement>;
}
