import { KebabDropdown } from "../ui/cards/statCard";
import BestSellers from "./bestSellers/BestSellers";
import { StackedAreaChart } from "./salesPerformance/SalesPerformance";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-center mb-6 md:gap-[1rem] my-[1rem] xl:grid-cols-[1fr,364px]">
      {/* <SalesPerformance /> */}
      <div className="col-span-3 bg-neutral-bg rounded-2xl border border-[var(--neutral-border)]">
        <div className="flex items-center justify-between px-6 py-[18px] border-b-1 border-[var(--neutral-border)]">
          <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
            Sales Performance
          </p>
          <KebabDropdown />
        </div>
        <div className="px-[2rem] pb-[2rem]">
          <StackedAreaChart />
        </div>
      </div>
      <div className="h-[100%] w-[100%] mt-[1rem] lg:my-0">
        <BestSellers />
      </div>
    </div>
  );
}
