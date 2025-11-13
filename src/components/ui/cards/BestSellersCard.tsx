import React from "react";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

const sellers = [
  {
    name: "Esther Howard",
    company: "Louis Vuitton",
    img: "/images/seller-avatar-1.png",
    amount: "$778.35",
    sales: "1258 sales",
  },
  {
    name: "Wade Warren",
    company: "Binford Ltd.",
    img: "/images/seller-avatar-2.png",
    amount: "$576.28",
    sales: "1028 sales",
  },
  {
    name: "Cameron Williamson",
    company: "MasterCard",
    img: "/images/seller-avatar-3.png",
    amount: "$446.61",
    sales: "985 sales",
  },
];

export const BestSellersCard = () => {
  return (
    <div className="bg-neutral-bg rounded-2xl p-5 shadow-md flex flex-col justify-between min-w-[280px]">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-gray-400">Best Sellers</p>
        <MoreVertical size={16} className="text-gray-500 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-4">
        {sellers.map((seller, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={seller.img}
                alt={seller.name}
                width={200}
                height={100}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {seller.name}
                </p>
                <p className="text-xs text-gray-500">{seller.company}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">
                {seller.amount}
              </p>
              <p className="text-xs text-gray-500">{seller.sales}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
