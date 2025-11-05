// src/components/layout/Navbar.tsx
"use client";

import { Menu } from "lucide-react";

export const  Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="h-[5rem] border-b border-[var(--neutral-border)] text-text-primary flex items-center justify-between py-6 px-6 bg-neutral-bg sticky top-0 z-50">
      <button
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Hello, Ibraheem 👋</span>
      </div>
    </header>
  );
};
