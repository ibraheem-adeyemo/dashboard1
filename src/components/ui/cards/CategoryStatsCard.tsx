import React from "react";

const CategoryStatsCard = ({
  title,
  data,
}: {
  title: string;
  data: { label: string; amount: number; color: string; percentage: number }[];
}) => {
  return (
    <div className="rounded-2xl border bg-neutral-bg border-[var(--neutral-border)] p-6">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <button className="text-gray-400 hover:text-gray-300">
          <i className="ri-more-fill"></i>
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm">{item.label}</p>
              <p className="text-sm text-gray-400">${item.amount}</p>
            </div>

            <div className="h-2.5 w-full rounded-md bg-neutral-accent">
              <div
                className={`h-full rounded-md ${item.color}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStatsCard;
