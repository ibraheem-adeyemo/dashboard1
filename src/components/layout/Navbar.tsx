// src/components/layout/Navbar.tsx
"use client";

import { Menu } from "lucide-react";

export const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white sticky top-0 z-50">
      <button
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">Hello, Ibraheem 👋</span>
      </div>
    </header>
  );
};
