"use client";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/reduxHooks";
import ConfirmationModal from "../modals/confirmation-modal";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { logout } from "@/redux/slices/dummy/dummySlice";

const UserMenuDropdown = () => {
  const appDispatch = useAppDispatch();
  const { open, setOpen } = useConfirmationDialog({});
  const LogoutConfirrmationModal = () => {
    return (
      <ConfirmationModal
        open={open}
        handleClose={() => setOpen(false)}
        onConfirm={() => appDispatch(logout())}
      />
    );
  };
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
      <LogoutConfirrmationModal />
      <DropdownItem href="/profile">Profile</DropdownItem>
      <DropdownItem href="/settings">Settings</DropdownItem>
      <DropdownItem onClick={() => setOpen(true)}>Logout</DropdownItem>
    </Dropdown>
  );
};

export default UserMenuDropdown;
