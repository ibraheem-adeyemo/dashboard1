// src/components/layout/Sidebar/SidebarItem.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { SidebarItem as SidebarItemType } from "./sidebar.data";
import SidebarSubmenu from "./SidebarSubMenu";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SidebarItem = ({ item }: { item: SidebarItemType }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <li className="relative">
      <button
        onClick={() => item.submenu && setOpen(!open)}
        className="flex items-center w-full text-left px-2 py-3 hover:bg-[var(--color-brands)] hover:text-white rounded-lg transition"
      >
        <Icon className="mr-3 text-text-primary text-lg" />
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 text-text-primary hover:text-white font-medium"
          >
            {item.label}
          </Link>
        ) : (
          <span className="flex-1 text-text-primary hover:text-white font-medium">
            {item.label}
          </span>
        )}
        {item.submenu && (
          <span className="ml-auto text-sm hover:text-white">
            {open ? <FaAngleDown /> : <FaAngleUp />}
          </span>
        )}
      </button>

      {item.submenu && open && <SidebarSubmenu submenu={item.submenu} />}
    </li>
  );
};

export default SidebarItem;
