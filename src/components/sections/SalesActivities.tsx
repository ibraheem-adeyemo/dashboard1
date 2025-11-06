import React, { Fragment } from "react";
import StatCard from "../ui/cards/statCard";

const stats = [
  {
    title: "Total Sells",
    value: "$126.500",
    icon: "/assets/images/icons/icon-cart.svg",
    trend: {
      value: "34.7%",
      isPositive: true,
      comparisonText: "Compared to Jan 2022",
    },
  },
  {
    title: "New Customers",
    value: "1,204",
    icon: "/assets/images/icons/icon-users.svg",
    trend: {
      value: "12.4%",
      isPositive: true,
      comparisonText: "Since last month",
    },
  },
  {
    title: "Refunds",
    value: "$430",
    icon: "/assets/images/icons/icon-refund.svg",
    trend: {
      value: "4.2%",
      isPositive: false,
      comparisonText: "Compared to last month",
    },
  },
  {
    title: "Refunds",
    value: "$430",
    icon: "/assets/images/icons/icon-refund.svg",
    trend: {
      value: "4.2%",
      isPositive: false,
      comparisonText: "Compared to last month",
    },
  },
];

const SalesActivities = () => {
  return (
    <div className="grid grid-cols-4 gap-[2rem]">
      {stats.map((item, i) => (
        <Fragment key={i}>
          <StatCard
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={"KebabIcon"}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default SalesActivities;
