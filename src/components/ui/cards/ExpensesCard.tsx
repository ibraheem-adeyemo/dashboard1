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
    <div className="bg-[#1f2128] rounded-2xl p-5 text-gray-300 shadow-md flex flex-col justify-between min-w-[300px]">
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
