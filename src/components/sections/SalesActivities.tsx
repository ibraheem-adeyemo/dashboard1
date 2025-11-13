import React, { Fragment } from "react";
import { StatCard } from "../ui/cards/statCard";

const stats = [
  {
    title: "Total Sells",
    value: "$126.500",
    icon: "/images/icons/icon-cart.svg",
    trend: {
      value: "34.7%",
      isPositive: true,
      comparisonText: "Compared to Jan 2022",
    },
  },
  {
    title: "New Customers",
    value: "1,204",
    icon: "/images/icons/icon-user.svg",
    trend: {
      value: "12.4%",
      isPositive: true,
      comparisonText: "Since last month",
    },
  },
  {
    title: "New Orders",
    value: "$430",
    icon: "/images/icons/icon-share.svg",
    trend: {
      value: "4.2%",
      isPositive: false,
      comparisonText: "Compared to last month",
    },
  },
  {
    title: "Refunds",
    value: "$430",
    icon: "/images/icons/icon-refunds.svg",
    trend: {
      value: "4.2%",
      isPositive: false,
      comparisonText: "Compared to last month",
    },
  },
];

const SalesActivities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
      {stats.map((item, i) => (
        <Fragment key={i}>
          <StatCard
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={item.icon}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default SalesActivities;
