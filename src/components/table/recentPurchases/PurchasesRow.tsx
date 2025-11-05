"use client";

import React from "react";
import Image from "next/image";
import { Purchase } from "./purchases.data";
import RowActions from "./RowActions";

export default function PurchasesRow({ item }: { item: Purchase }) {
  return (
    <tr className="border-b text-normal text-gray-1100 border-neutral dark:border-dark-neutral-border dark:text-gray-dark-1100">
      <td className="text-left align-middle py-4">
        <input
          className="checkbox checkbox-primary rounded border-2 w-[18px] h-[18px]"
          type="checkbox"
        />
      </td>

      <td className="py-4 align-middle">
        <span>{item.product}</span>
      </td>

      <td className="align-middle">{item.orderId}</td>

      <td className="align-middle">{item.date}</td>

      <td className="align-middle">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden relative">
            <Image
              src={item.customerAvatar}
              alt={item.customerName}
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
            {item.customerName}
          </p>
        </div>
      </td>

      <td className="align-middle">
        <div className="flex items-center gap-x-2">
          <div
            className={`w-2 h-2 rounded-full ${statusColor(item.status)}`}
          ></div>
          <p className="text-normal text-gray-1100 dark:text-gray-dark-1100">
            {item.status}
          </p>
        </div>
      </td>

      <td className="align-middle">{item.amount}</td>

      <td className="align-middle text-center">
        <RowActions />
      </td>
    </tr>
  );
}

function statusColor(status: string) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "bg-green";
    case "pending":
      return "bg-orange";
    case "canceled":
    case "cancel":
      return "bg-red";
    default:
      return "bg-gray-400";
  }
}
