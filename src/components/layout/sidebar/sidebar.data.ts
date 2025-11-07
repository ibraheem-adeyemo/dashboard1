// src/components/layout/Sidebar/sidebar.data.ts
import { IconType } from "react-icons";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaChartPie,
  FaEnvelope,
  FaMoneyBill,
} from "react-icons/fa";

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface SidebarItem {
  label: string;
  href?: string;
  icon: IconType;
  submenu?: SubMenuItem[];
}

export const sidebarData: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FaTachometerAlt,
  },
  {
    label: "Financial",
    href: "/dashboard/financial",
    icon: FaMoneyBill,
  },
  {
    label: "Ecommerce",
    icon: FaShoppingCart,
    submenu: [
      { label: "Products", href: "/ecommerce/products" },
      { label: "Orders", href: "/ecommerce/orders" },
      { label: "Customers", href: "/ecommerce/customers" },
    ],
  },
  {
    label: "Finance",
    icon: FaChartPie,
    submenu: [
      { label: "Reports", href: "/finance/reports" },
      { label: "Transactions", href: "/finance/transactions" },
    ],
  },
  {
    label: "Messages",
    href: "/messages",
    icon: FaEnvelope,
  },
];
