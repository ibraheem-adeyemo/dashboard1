"use client";

import { Sidebar } from "../sidebar/index";
import { Navbar } from "../Navbar";
import { useState } from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex text-gray-900">
      <div className="flex">
        {/* Desktop sidebar: always visible on md+ */}
            <div className="hidden md:block">
                <Sidebar />
            </div>
            
        {/* Mobile sidebar: shown when sidebarOpen is true */}
        {sidebarOpen && (
          <>
            {/* backdrop */}
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-y-0 left-0 w-64 z-50 md:hidden">
              <Sidebar />
            </div>
          </>
        )}
        
      </div>
      <div className="flex flex-col w-full">
          <Navbar toggleSidebar={() => setSidebarOpen((s) => !s)} />
        {/* Main content area */}      

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

