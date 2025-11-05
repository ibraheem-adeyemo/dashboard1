"use client";

import Dropdown from "@/components/ui/dropdown/Dropdown";
import React from "react";

export function TableOptions() {
  return (
    <Dropdown
      trigger={
        <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src="/images/icons/icon-toggle.svg" alt="options" />
        </button>
      }
      align="right"
    >
      <div className="p-3 min-w-[160px] bg-neutral-bg dark:bg-dark-neutral-bg">
        <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700">
          Sales report
        </button>
        <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700">
          Export report
        </button>
        <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700">
          Profit manage
        </button>
        <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700">
          Revenue report
        </button>
        <div className="w-full h-[1px] bg-neutral my-2 dark:bg-dark-neutral-border"></div>
        <button className="block w-full text-left px-3 py-2 text-[11px] text-red">
          Remove widget
        </button>
      </div>
    </Dropdown>
  );
}
