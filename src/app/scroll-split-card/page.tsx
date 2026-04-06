import Intro from "@/components/split-card-components/intro";
import PinSection from "@/components/split-card-components/pin-section";

const ScrollSplitCard = () => {
  return (
    <div className="relative overflow-x-clip">
      <div
        className="fixed inset-0 z-0 bg-linear-to-t from-green-900 to-black"
        aria-hidden
      />

      <div className="relative z-10">
        <Intro />
        <PinSection />
      </div>
    </div>
  );
};
export default ScrollSplitCard;
