import React from "react";
import Google from "../icons/google";
import { BentoHeading } from "../util-comps/bento-heading";
import { BentoPara } from "../util-comps/bento-para";
import { BentoIcon } from "../util-comps/bento-icon";
import { BentoHeaderCard } from "../util-comps/bento-header-card";

export const ThirdCard = () => {
  return (
    <div className="row-span-2 relative flex flex-col items-center justify-start group shadow-ace rounded-xl overflow-hidden h-full">
      {/* Headee */}
      <BentoHeaderCard>
        <BentoIcon>
          <Google className="size-3.5" />
        </BentoIcon>
        <BentoHeading>Get found on Google</BentoHeading>
        <BentoPara>
          We'll make sure your website is optimized for search engines, so you
          can get the traffic you're looking for.
        </BentoPara>
      </BentoHeaderCard>
    </div>
  );
};
