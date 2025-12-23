import React from "react";
import { MoreVertical } from "lucide-react";

const categories = [
  { name: "Shopping", color: "bg-orange-400", bg: "#DAFCCC", percent: 70 },
  { name: "Workspace", color: "bg-violet-400", bg: "#DAD7FE", percent: 46 },
  { name: "Projects", color: "bg-red-400", bg: "#FFE5D3", percent: 15 },
  { name: "Other", color: "bg-blue-400", bg: "#CCECFE", percent: 67 },
];

export const ExpensesCard = () => {
  return (
    <div className="bg-neutral-bg rounded-2xl p-5 shadow-md flex flex-col justify-between min-w-[300px]">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-gray-400">All expenses</p>
        <MoreVertical size={16} className="text-gray-500 cursor-pointer" />
      </div>

      <div className="mb-5">
        {/* Legend */}
        <div className="flex items-center flex-wrap gap-4 mb-6">
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${cat.color}`} />
              <span className="text-[10px] text-gray-400">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Circular progress indicators */}
        <div className="flex items-center gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative w-[65px] h-[65px] rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(${cat.bg} ${cat.percent * 3.6}deg, #2A2D34 0deg)`,
              }}
            >
              <span className="absolute text-xs text-white">
                {cat.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim
        sem.
      </p>
    </div>
  );
};

export default function ExpensesChart({
  title = "All expenses",
  categories = [
    { name: "Shopping", percentage: 70, color: "#10b981" },
    { name: "Workplace", percentage: 46, color: "#8b5cf6" },
    { name: "Projects", percentage: 15, color: "#3b82f6" },
    { name: "Other", percentage: 67, color: "#ef4444" },
  ],
  description = "Get a clear view of your spending — track, analyze, and stay in control.",
}) {
  return (
    <div className="w-full max-w-2xl bg-neutral-bg  rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-normal">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <span className="text-sm">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Progress Circles */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-18 h-18 mb-2">
              {/* Background circle */}
              <svg className="w-full h-full ml-1 transform -rotate-90">
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke={`${category.color}15`}
                  strokeWidth="4"
                />
                {/* Progress circle */}
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke={category.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - category.percentage / 100)}`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Percentage text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold">
                  {category.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
