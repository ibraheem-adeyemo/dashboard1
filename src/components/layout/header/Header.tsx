"use client";

import Link from "next/link";
import Image from "next/image";
import NotificationDropdown from "@/components/ui/dropdown/NotificationDropdown";
import { CustomSelect } from "@/components/ui/select/custom-select";
import UserMenuDropdown from "@/components/ui/dropdown/UserMenuDropdown";
import { Menu } from "lucide-react";
import { OptionProp } from "@/types/components";
import { periodsArr } from "@/data";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectDummyData, updatePeriod } from "@/redux/slices/dummy/dummySlice";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const state = useAppSelector(selectDummyData);

  const appDispatch = useAppDispatch();
  const onSelectedPeriodChange = (value: OptionProp | OptionProp[]) => {
    appDispatch(updatePeriod(value));
  };

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
        <div className="hidden w-[max(40rem,60%)] md:flex">
          {/* <SearchBar /> */}
          <div className="w-[200px]">
            <CustomSelect
              options={periodsArr}
              value={state.selectedPeriod}
              onChange={onSelectedPeriodChange}
              triggerClassName="bg-[var(--neutral-200)]"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end flex-1 gap-4">
          {/* Theme toggle */}
          {/* <ThemeToggle /> */}

          {/* Placeholder for dropdowns */}
          {/* <BrowseDropdown />
          <MessageDropdown /> */}
          <NotificationDropdown />
          <UserMenuDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
