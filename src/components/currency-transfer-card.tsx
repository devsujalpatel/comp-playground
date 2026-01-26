"use client";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  CheckIcon,
  InfoIcon,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const CurrencyTransfer = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const transactionId = "TXN-DAB3UL494";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCompleted(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="h-105 w-95 border hover:border-emerald-100 bg-white border-neutral-200 rounded-lg shadow-sm flex flex-col items-center p-4">
      <CardContent className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: isCompleted ? 360 : 0,
          }}
          transition={{
            rotate: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: { duration: 0.3 },
          }}
          className="relative mx-4 h-20 w-20 rounded-full flex items-center justify-center shadow shadow-emerald-100"
        >
          {/* BORDER */}
          <motion.div
            animate={{
              rotate: isCompleted ? 0 : 360,
            }}
            transition={{
              rotate: {
                duration: 1.8,
                repeat: isCompleted ? 0 : Infinity,
                ease: "linear",
              },
            }}
            className={cn(
              "absolute inset-0 rounded-full",
              isCompleted
                ? "border-emerald-300 border"
                : "border-t border-t-emerald-400",
            )}
          />

          {/* ICON CONTAINER */}
          <motion.div className="relative z-10 rounded-full bg-white p-4 shadow">
            <AnimatePresence mode="wait">
              {!isCompleted ? (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{
                    opacity: 0,
                    filter: "blur(6px)",
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <ArrowUpDown className="size-10 text-emerald-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <CheckIcon className="size-10 text-emerald-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="mt-4 text-center flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <motion.h2
                  animate={{ opacity: 1, y: 0 }}
                  className="font-semibold text-lg text-zinc-900 uppercase tracking-tighter dark:text-zinc-100"
                  exit={{ opacity: 0, y: -20 }}
                  initial={{ opacity: 0, y: 20 }}
                  key="completed-title"
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Transfer Completed
                </motion.h2>
              ) : (
                <motion.h2
                  animate={{ opacity: 1, y: 0 }}
                  className="font-semibold text-lg text-zinc-900 uppercase tracking-tighter dark:text-zinc-100"
                  exit={{ opacity: 0, y: -20 }}
                  initial={{ opacity: 0, y: 20 }}
                  key="progress-title"
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Transfer in Progress
                </motion.h2>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="font-medium text-emerald-600 text-xs dark:text-emerald-400"
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  key="completed-id"
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Transaction ID: {transactionId}
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="font-medium text-emerald-600 text-xs dark:text-emerald-400"
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  key="progress-status"
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Processing Transaction...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div
            className="w-full flex flex-col items-center"
            animate={{
              gap: isCompleted ? "0px" : "12px",
            }}
            initial={{ gap: "12px" }}
            transition={{
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
            <motion.div
              className={cn(
                "border flex flex-col items-start p-3 rounded-lg bg-neutral-50 mt-5 w-80 gap-1.5",
                isCompleted
                  ? "rounded-b-none border-b-0"
                  : "rounded-b-lg border-b  hover:border-emerald-200 ",
              )}
            >
              <div className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                <ArrowUp className="size-3" />
                <span className="text-xs">From</span>
              </div>
              <div className="flex items-center gap-2 justify-start">
                <div className="border border-neutral-300 text-black px-2 py-0.5 rounded-md shadow-lg">
                  $
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className={cn(
                      "font-semibold transition-colors ease-in duration-75",
                      isCompleted ? "text-black" : "text-neutral-600",
                    )}
                  >
                    500.00 USD
                  </h3>
                  <p className="text-neutral-500 text-xs">
                    Chase Bank ••••4589
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={cn(
                "border flex flex-col items-start p-3 rounded-lg  bg-neutral-50 w-80 gap-1.5",
                isCompleted
                  ? "rounded-t-none border-t-0"
                  : "rounded-t-lg border-t hover:border-emerald-200",
              )}
            >
              <div className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                <ArrowDown className="size-3" />
                <span className="text-xs">To</span>
              </div>
              <div className="flex items-center gap-2 justify-start">
                <div className="border border-neutral-300 text-black px-2 rounded-md py-0.5 shadow-lg">
                  €
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className={cn(
                      "font-semibold transition-colors ease-in duration-75",
                      isCompleted ? "text-black" : "text-neutral-600",
                    )}
                  >
                    460.00 EUR
                  </h3>
                  <p className="text-neutral-500 text-xs">
                    Deutsche Bank ••••7823
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            className="mt-2 flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  key="completed-rate"
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Exchange Rate: 1 USD = 0.92 EUR
                </motion.span>
              ) : (
                <motion.span
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  key="calculating-rate"
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Calculating exchange rate...
                </motion.span>
              )}
            </AnimatePresence>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-3 w-3 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">
                  {isCompleted ? "Rate updated at 12:30 PM" : "Please wait..."}
                </p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
