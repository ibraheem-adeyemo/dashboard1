"use client";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Image from "next/image";

const UserMenuDropdown = () => {
  return (
    <Dropdown
      trigger={
        <span className="flex items-center gap-2 focus:outline-none">
          <Image
            src="/images/avatar-ecommerce-1.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">
            Ibraheem
          </span>
        </span>
      }
    >
      <DropdownItem href="/profile">Profile</DropdownItem>
      <DropdownItem href="/settings">Settings</DropdownItem>
      <DropdownItem onClick={() => alert("Logging out...")}>
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default UserMenuDropdown;
