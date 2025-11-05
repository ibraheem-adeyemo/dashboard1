// src/components/layout/Sidebar/Sidebar.tsx
"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { sidebarData } from "./sidebar.data";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";

const Sidebar = () => {
  return (
    <aside className="w-80 bg-neutral-bg text-text-primary h-screen border-r border-[var(--neutral-border)] shadow-md left-0 top-0 flex flex-col">
      <SidebarLogo />

      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {sidebarData.map((item, i) => (
            <SidebarItem key={i} item={item} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
