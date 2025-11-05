"use client";

import React from "react";
import { Purchase } from "./purchases.data";
import PurchasesRow from "./PurchasesRow";

export default function PurchasesTable({ items }: { items: Purchase[] }) {
  return (
    <table className="w-full min-w-[900px] text-sm">
      <thead>
        <tr className="border-b border-neutral dark:border-dark-neutral-border pb-4">
          <th className="text-left w-[48px]">
            <input
              className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
              type="checkbox"
              aria-label="select all"
            />
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Products
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Order ID
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Date
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Customer name
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Status
          </th>
          <th className="font-normal text-normal text-gray-400 text-left pb-4 dark:text-gray-dark-400">
            Amount
          </th>
          <th className="font-normal text-normal text-gray-400 text-center pb-4 dark:text-gray-dark-400">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <PurchasesRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
