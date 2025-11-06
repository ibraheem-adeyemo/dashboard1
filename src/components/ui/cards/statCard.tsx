import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import { KebabIcon } from "@/assets/icons/dashboardIcons";
// import { FaEdit } from "react-icons/fa";

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
export default function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <div className="relative rounded-2xl border border-neutral bg-neutral-bg px-5 py-4 dark:border-dark-neutral-border dark:bg-dark-neutral-bg flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400 dark:text-gray-dark-400">{title}</p>
        <Dropdown trigger={<KebabIcon />}>
          {dropdownItem.map((item, i) => (
            <div key={i}>{item.label}</div>
          ))}
        </Dropdown>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-500/20">
            {/* <Image src={icon} alt={title} width={24} height={24} /> */}
          </div>
          <p className="text-xl font-semibold text-gray-1100 dark:text-gray-dark-1100">
            {value}
          </p>
        </div>

        {trend && (
          <div className="flex items-center gap-1">
            <Image
              src={
                trend.isPositive
                  ? "/assets/images/icons/icon-up.svg"
                  : "/assets/images/icons/icon-down.svg"
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
