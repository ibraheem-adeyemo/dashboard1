"use client";

import React from "react";
import { purchases } from "./purchases.data";
import { TableOptions } from "./TableOptions";
import PurchasesTable from "./PurchasesTable";

type Props = {
  title?: string;
  items?: typeof purchases;
};

export default function RecentPurchases({
  title = "Recent Purchases",
  items = purchases,
}: Props) {
  return (
    <div className="rounded-2xl border border-neutral bg-neutral-bg dark:border-dark-neutral-border dark:bg-dark-neutral-bg overflow-hidden p-6 mb-8">
      <div className="flex items-center justify-between pb-4 border-neutral border-b mb-5 dark:border-dark-neutral-border">
        <p className="text-subtitle-semibold font-semibold text-gray-1100 dark:text-gray-dark-1100">
          {title}
        </p>
        <div className="ml-auto translate-x-4 z-10">
          {/* Action dropdown placeholder (you can pass custom dropdown component via props if needed) */}
          <TableOptions />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <PurchasesTable items={items} />
      </div>
    </div>
  );
}
