"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import {
  InitialStateProps,
  selectDummyData,
} from "@/redux/slices/dummy/dummySlice";
import React, { Fragment } from "react";
import { StatCard } from "../ui/cards/statCard";

const iconsObj = {
  "Total Sells": "/images/icons/icon-cart.svg",
  "New Customers": "/images/icons/icon-user.svg",
  "New Orders": "/images/icons/icon-share.svg",
  Refunds: "/images/icons/icon-refunds.svg",
};

const SalesActivities = () => {
  const state: InitialStateProps = useAppSelector(selectDummyData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
      {state?.dashboardStat?.map((item, i) => (
        <Fragment key={i}>
          <StatCard
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={iconsObj[item.title]}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default SalesActivities;
