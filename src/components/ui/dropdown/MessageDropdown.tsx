"use client";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const MessageDropdown = () => {
  return (
    <Dropdown
      trigger={
        <span
          className="relative text-gray-600 dark:text-gray-300 hover:text-primary"
          aria-label="Messages"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m-2 8a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </span>
      }
    >
      <DropdownItem href="/messages/1">New message from John</DropdownItem>
      <DropdownItem href="/messages/2">Update from Admin</DropdownItem>
      <DropdownItem href="/messages">View all messages</DropdownItem>
    </Dropdown>
  );
};

export default MessageDropdown;
