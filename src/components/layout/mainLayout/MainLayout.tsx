// src/components/layout/MainLayout.tsx
"use client";

import { Sidebar } from "../sidebar/index";
import { Navbar } from "../Navbar";
import { useState } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="hidden md:block">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 px-6 py-6">
          {children}
        </main>

        <footer className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
