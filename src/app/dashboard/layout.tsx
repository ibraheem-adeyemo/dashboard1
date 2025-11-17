"use client";

import MainLayout from "@/components/layout/mainLayout/MainLayout";
import { CustomSelect } from "@/components/ui/select/custom-select";
import { periodsArr } from "@/data";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectDummyData, updatePeriod } from "@/redux/slices/dummy/dummySlice";
import { OptionProp } from "@/types/components";
import { Fragment, ReactNode } from "react";

export default function DashboardLayout({
    DashboardTitle,
  children,
}: {
    DashboardTitle?: ReactNode
  children: React.ReactNode;
}) {
    const state = useAppSelector(selectDummyData);

    const appDispatch = useAppDispatch()
    const onSelectedPeriodChange = (value:OptionProp| OptionProp[]) => {
        appDispatch(updatePeriod(value))
    }

  return <MainLayout>
      <div className="flex justify-end mb-[1rem]">
        {/* {DashboardTitle} */}
        <div className="w-[200px]">
            <CustomSelect options={periodsArr} value={state.selectedPeriod} onChange={onSelectedPeriodChange} triggerClassName="bg-[var(--neutral-600)]" />
        </div>
      </div>
      <Fragment>
      {children}
      </Fragment>
  </MainLayout>;
}
