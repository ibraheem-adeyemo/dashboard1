"use client";

import Dropdown from "@/components/ui/dropdown/Dropdown";
import React from "react";

export default function RowActions() {
  return (
    <div className="flex justify-center">
      <Dropdown
        trigger={
          <button
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="row actions"
          >
            <img
              src="/images/icons/icon-more.svg"
              alt="more"
              className="w-5 h-5"
            />
          </button>
        }
        align="right"
      >
        <div className="p-2">
          <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-dark-500">
            View details
          </button>
          <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-dark-500">
            Pending
          </button>
          <button className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-dark-500">
            Completed
          </button>
          <div className="w-full h-[1px] bg-neutral my-2 dark:bg-dark-neutral-border"></div>
          <button className="block w-full text-left px-3 py-2 text-[11px] text-red hover:text-red-600">
            Cancel
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
