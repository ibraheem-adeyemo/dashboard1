"use client";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const BrowseDropdown = () => {
  return (
    <Dropdown
      trigger={
        <span className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium">
          Browse
        </span>
      }
      align="left"
    >
      <DropdownItem href="/categories">Categories</DropdownItem>
      <DropdownItem href="/popular">Popular</DropdownItem>
      <DropdownItem href="/new">New Arrivals</DropdownItem>
      <DropdownItem href="/top-rated">Top Rated</DropdownItem>
    </Dropdown>
  );
};

export default BrowseDropdown;
