"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
// import { KebabIcon } from "@/assets/icons/dashboardIcons";
// import Dropdown from "@/components/ui/dropdown/Dropdown";
import { data } from "./performance.data";

// export default function SalesPerformance() {
//   return (
//     <div className="rounded-2xl border border-neutral bg-neutral-bg dark:border-dark-neutral-border dark:bg-dark-neutral-bg">
//       <div className="flex items-center justify-between px-6 py-[18px]">
//         <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
//           Sales Performance
//         </p>
//         <div className="flex items-center gap-4 text-desc">
//           <p className="text-gray-400 dark:text-gray-dark-400">Today’s</p>
//           <p className="text-color-brands">Monthly</p>
//           <p className="text-gray-400 dark:text-gray-dark-400">Yearly</p>
//           <Dropdown trigger={<KebabIcon />}>
//             <div></div>
//           </Dropdown>
//         </div>
//       </div>
//     </div>
//   );
// }

// #endregion
export const StackedAreaChart = () => {
  return (
    <AreaChart
      style={{
        width: "100%",
        maxHeight: "400px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
};
