"use client";

import { Menu, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface DropdownItemProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

const DropdownItem = ({ href, onClick, children }: DropdownItemProps) => {
  const baseClasses =
    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer";

  if (href) {
    return (
      <MenuItem>
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </MenuItem>
    );
  }

  return (
    <MenuItem>
      <button onClick={onClick} className={baseClasses}>
        {children}
      </button>
    </MenuItem>
  );
};

export default DropdownItem;
