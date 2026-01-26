"use client";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUp, ArrowUpDown, InfoIcon } from "lucide-react";
import { Card, CardAction, CardContent } from "./ui/card";
import { useState } from "react";

export const CurrencyTransfer = () => {
  const [merged, setMerged] = useState(false);

  return (
    <Card className="h-115 w-100 border hover:border-emerald-100 border-neutral-200 rounded-lg shadow-sm flex flex-col items-center p-4">
      <CardContent className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-6 mx-4 border border-emerald-100 rounded-full shadow-emerald-100"
        >
          <ArrowUpDown className="size-10 text-emerald-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="mt-4 text-center flex flex-col items-center gap-3">
            <h2 className="text-black text-xl font-semibold uppercase tracking-tighter">
              Transfer in Progress
            </h2>
            <p className="text-emerald-600 text-sm">
              Processing Transaction...
            </p>
          </div>
          <AnimatePresence mode="wait">
            <div className="w-full flex flex-col items-center">
              <motion.div className="border flex flex-col items-start p-3 rounded-lg hover:border-emerald-200 bg-neutral-50 mt-5 w-80 gap-1.5">
                <div className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                  <ArrowUp className="size-3" />
                  <span className="text-xs">From</span>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <div className="border border-neutral-300 text-black px-2 rounded-md">
                    $
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-neutral-800">500.00 USD</h3>
                    <p className="text-neutral-500 text-xs">
                      Chase Bank ••••4589
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                layoutId="bank-card"
                className="border flex flex-col items-start p-3 rounded-lg hover:border-emerald-200 bg-neutral-50 mt-5 w-80 gap-1.5"
              >
                <div className="flex items-center gap-1 text-sm text-neutral-500 mb-1">
                  <ArrowDown className="size-3" />
                  <span className="text-xs">To</span>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <div className="border border-neutral-300 text-black px-2 rounded-md">
                    €
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-neutral-800">460.00 EUR</h3>
                    <p className="text-neutral-500 text-xs">
                      Deutsche Bank ••••7823
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
          <div className="flex justify-center items-center gap-2 my-2">
            <p className="text-neutral-500 text-sm">
              Calculating Exchange Rate...
            </p>
            <InfoIcon className="size-4 text-neutral-500" />
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
