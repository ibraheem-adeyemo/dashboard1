// src/components/layout/Sidebar/Sidebar.tsx
"use client";

import { sidebarData } from "./sidebar.data";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen shadow-md left-0 top-0 flex flex-col">
      <SidebarLogo />

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {sidebarData.map((item, i) => (
            <SidebarItem key={i} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
