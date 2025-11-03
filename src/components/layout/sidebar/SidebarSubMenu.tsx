// src/components/layout/Sidebar/SidebarSubmenu.tsx
"use client";

import Link from "next/link";
import { SubMenuItem } from "./sidebar.data";

const SidebarSubmenu = ({ submenu }: { submenu: SubMenuItem[] }) => {
  return (
    <ul className="pl-10 py-2 bg-white">
      {submenu.map((sub, idx) => (
        <li key={idx} className="mb-1">
          <Link
            href={sub.href}
            className="block px-3 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 rounded-md"
          >
            {sub.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarSubmenu;
