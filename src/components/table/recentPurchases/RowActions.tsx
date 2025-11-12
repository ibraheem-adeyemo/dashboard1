"use client";

import { KebabIcon } from "@/assets/icons/dashboardIcons";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import React from "react";

const DropdownOpton1 = ({options, onSelect }: {options:{text: string}[], onSelect?: (value: string) => void }) => (
    <div className="p-2">
        {
            options.map((item, i) => (
                <button onClick={onSelect? () => onSelect(item.text) : undefined} className="block w-full text-left px-3 py-2 text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-dark-500">
                {item.text}
              </button>
            ))
        }
    </div>
)
export default function RowActions({options, onSelect}: {options:{text: string}[],onSelect?: (value: string)=>void}) {
  return (
    <div className="flex justify-center z-20">
      <Dropdown trigger={<KebabIcon />} align="right">
          <DropdownOpton1 options={options} onSelect={onSelect} />        
      </Dropdown>
    </div>
  );
}
