import { ComponentExample } from "@/components/component-example";
import { CurrencyTransfer } from "@/components/currency-transfer-card";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-neutral-50">
      <CurrencyTransfer />
    </div>
  );
}
