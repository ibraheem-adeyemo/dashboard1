"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
// import { KebabIcon } from "@/assets/icons/dashboardIcons";
// import Dropdown from "@/components/ui/dropdown/Dropdown";
import { data } from "./performance.data";

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
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>

        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>

        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
        </linearGradient>
      </defs>

      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="url(#colorPv)"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="url(#colorAmt)"
      />
    </AreaChart>
  );
};
