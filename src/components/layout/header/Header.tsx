"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import BrowseDropdown from "@/components/ui/dropdown/BrowserDropdown";
import MessageDropdown from "@/components/ui/dropdown/MessageDropdown";
import NotificationDropdown from "@/components/ui/dropdown/NotificationDropdown";
import UserMenuDropdown from "@/components/ui/dropdown/UserMenuDropdown";
import { Menu } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import the other dropdowns later like BrowseDropdown, MessageDropdown, etc.

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="flex bg-neutral-bg shadow-sm h-[5rem] py-auto">
      <div className="flex items-center w-full justify-between px-4 py-2 md:px-6">
        {/* Left section */}
        <div>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="hidden">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                  MyApp
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div className="hidden w-[max(40rem,60%)] md:flex justify-center">
          <SearchBar />
        </div>

        {/* Right section */}
        <div className="flex items-center justify-between flex-1 gap-4">
          {/* Theme toggle */}
          {/* <ThemeToggle /> */}

          {/* Placeholder for dropdowns */}
          <BrowseDropdown />
          <MessageDropdown />
          <NotificationDropdown />
          <UserMenuDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
