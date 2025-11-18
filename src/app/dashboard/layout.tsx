"use client";

import MainLayout from "@/components/layout/mainLayout/MainLayout";
import { Fragment, ReactNode } from "react";

export default function DashboardLayout({
    DashboardTitle,
  children,
}: {
    DashboardTitle?: ReactNode
  children: React.ReactNode;
}) {
    

  return <MainLayout>
      <div className="flex justify-end mb-[1rem]">
        
      </div>
      <Fragment>
      {children}
      </Fragment>
  </MainLayout>;
}
