// src/components/layout/Sidebar/sidebar.data.ts
import { IconType } from "react-icons";
import { FaShoppingCart, FaChartPie, FaEnvelope } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import { PiCubeThin } from "react-icons/pi";

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
    icon: CiHome,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: FiPieChart,
  },
  {
    label: "Products",
    icon: PiCubeThin,
    submenu: [
      {
        label: "All products",
        href: "/dashboard/products",
      },
      {
        label: "New product",
        href: "/dashboard/products/product-form",
      },
    ],
  },
  {
    label: "Inventory",
    href: "/dashboard/analytics",
    icon: FiPieChart,
  },
  {
    label: "Orders",
    href: "/dashboard/ecommerce/products",
    icon: PiCubeThin,
  },
  {
    label: "Sales",
    href: "/dashboard/analytics",
    icon: FiPieChart,
  },
  {
    label: "Customer",
    href: "/dashboard/ecommerce/products",
    icon: PiCubeThin,
  },
  {
    label: "Ecommerce",
    icon: FaShoppingCart,
    submenu: [
      { label: "Products form", href: "/dashboard/ecommerce/product-form" },
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
