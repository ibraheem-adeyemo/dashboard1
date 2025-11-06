"use client";

import SellerCard from "./SellerCard";
import { bestSellers } from "./bestSellers.data";

export default function BestSellers() {
  return (
    <div className="rounded-2xl border border-neutral bg-neutral-bg dark:border-dark-neutral-border dark:bg-dark-neutral-bg flex-1 self-stretch">
      <div className="flex items-center justify-between px-6 py-[18px]">
        <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
          Best Sellers
        </p>
        {/* <Dropdown /> */}
      </div>

      <div className="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border"></div>

      <div className="pt-5 flex flex-col gap-5 px-[26px] pb-[22px]">
        {bestSellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </div>
  );
}
