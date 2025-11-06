import BestSellers from "./bestSellers/BestSellers";
import { StackedAreaChart } from "./salesPerformance/SalesPerformance";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-4 items-center mb-6 gap-[2rem] my-[3rem] xl:grid-cols-[1fr,364px]">
      {/* <SalesPerformance /> */}
      <div className="col-span-3 bg-neutral-bg rounded-md p-[2rem]">
        <StackedAreaChart />
      </div>
      <BestSellers />
    </div>
  );
}
