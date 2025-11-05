"use client";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Image from "next/image";

const UserMenuDropdown = () => {
  return (
    <Dropdown
      trigger={
        <button className="flex items-center gap-2 focus:outline-none">
          <Image
            src="/images/avatar.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">
            Ibraheem
          </span>
        </button>
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
