"use client";

import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import { KebabIcon } from "@/assets/icons/dashboardIcons";
// import { FaEdit } from "react-icons/fa";

import React from "react";
import { MoreVertical } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";

export interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
    comparisonText: string;
  };
}

const dropdownItem = [
  { label: "View Details", href: "#" },
  { label: "Download Report", href: "#" },
  { divider: true },
  { label: "Remove Widget", href: "#remove", color: "red" },
];

export const KebabDropdown = () => {
  return (
    <Dropdown trigger={<KebabIcon />}>
      {dropdownItem.map((item, i) => (
        <div key={i}>{item.label}</div>
      ))}
    </Dropdown>
  );
};
export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="relative rounded-2xl border border-[var(--neutral-border)] bg-neutral-bg px-5 py-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400 dark:text-gray-dark-400">{title}</p>
        <KebabDropdown />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-green-500/20">
            <Image
              src={icon}
              alt={title}
              width={18}
              className="text-white"
              height={18}
            />
          </div>
          <p className="text-sm font-semibold text-gray-1100 dark:text-gray-dark-1100">
            {value}
          </p>
        </div>

        {trend && (
          <div className="flex items-center gap-1">
            <Image
              src={
                trend.isPositive
                  ? "/images/icons/icon-export-green.svg"
                  : "/images/icons/icon-export-red.svg"
              }
              alt="trend"
              width={16}
              height={16}
            />
            <span
              className={`text-sm font-semibold ${
                trend.isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {trend.value}
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      {trend && (
        <p className="text-xs text-gray-400 dark:text-gray-dark-400">
          {trend.comparisonText}
        </p>
      )}
    </div>
  );
}

export const StatCard2 = ({
  icon,
  title,
  value = "0",
  percentage,
  color = "#22c55e",
  data = [{ value: 50 }],
}) => {
  const isPositive = percentage >= 0;
  const percentColor = isPositive ? "text-emerald-400" : "text-red-400";

  return (
    <div
      className="bg-neutral-bg rounded-xl p-5 shadow-md flex flex-col justify-between w-full min-w-[250px]
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      {/* Header */}

      <MoreVertical size={16} className="text-gray-500 cursor-pointer" />
      <div className="flex flex-col items-start justify-between">
        <div className="w-[100%] flex justify-between items-center gap-3">
          <div className="p-3 rounded-full flex flex-col items-center justify-center">
            <div style={{ backgroundColor: `${color}20` }}>
              {React.cloneElement(icon, { color, size: 22 })}
            </div>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold">
              $
              <CountUp
                end={parseFloat(value.replace(/[^0-9.]/g, ""))}
                duration={1.5}
                separator=","
                decimals={value.includes("k") ? 1 : 0}
                suffix={value.includes("k") ? "k" : ""}
              />
            </h3>
            <span className={`text-sm font-medium ${percentColor}`}>
              {isPositive ? "+" : ""}
              {percentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Line chart */}
      <div className="h-12 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
