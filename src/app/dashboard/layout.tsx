"use client";

import MainLayout from "@/components/layout/mainLayout/MainLayout";
import { useAppSelector } from "@/hooks/reduxHooks";
import { InitialStateProps, selectDummyData } from "@/redux/slices/dummy/dummySlice";
import { useRouter } from "next/navigation";
import { Fragment, ReactNode, useEffect } from "react";

export default function DashboardLayout({
    DashboardTitle,
  children,
}: {
    DashboardTitle?: ReactNode
  children: React.ReactNode;
}) {
    
    const state:InitialStateProps = useAppSelector(selectDummyData);
    const userLogginStatus = state.isUserLoggedIn;
    const router = useRouter();

    useEffect(() => {
        if(!userLogginStatus) {
            router.push("/login")
        }
    }, [userLogginStatus])
  return <MainLayout>
      <div className="flex justify-end mb-[1rem]">
        
      </div>
      <Fragment>
      {children}
      </Fragment>
  </MainLayout>;
}
