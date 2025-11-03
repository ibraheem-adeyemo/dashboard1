// src/components/layout/Sidebar/SidebarItem.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { SidebarItem as SidebarItemType } from "./sidebar.data";
import SidebarSubmenu from "./SidebarSubMenu";

const SidebarItem = ({ item }: { item: SidebarItemType }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <li className="relative">
      <button
        onClick={() => item.submenu && setOpen(!open)}
        className="flex items-center w-full text-left px-4 py-3 hover:bg-blue-50 rounded-lg transition"
      >
        <Icon className="mr-3 text-blue-600 text-lg" />
        {item.href ? (
          <Link href={item.href} className="flex-1 text-gray-700 font-medium">
            {item.label}
          </Link>
        ) : (
          <span className="flex-1 text-gray-700 font-medium">{item.label}</span>
        )}
        {item.submenu && (
          <span className="ml-auto text-sm text-gray-500">{open ? "−" : "+"}</span>
        )}
      </button>

      {item.submenu && open && <SidebarSubmenu submenu={item.submenu} />}
    </li>
  );
};

export default SidebarItem;
