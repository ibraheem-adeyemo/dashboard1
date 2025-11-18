"use client";

import { Menu, MenuItems, MenuButton, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  onClick?: ()=>void
}

const Dropdown = ({ trigger, children, onClick, align = "right" }: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left" onClick={onClick}>
      <MenuButton>{trigger}</MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none z-10`}
        >
          {children}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
