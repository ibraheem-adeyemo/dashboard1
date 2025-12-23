"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex w-full justify-between">
      <div className="relative w-full md:w-1/2 h-screen">
        <Image
          src="/images/crm-background-1.jpg"
          alt="login display images"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/2 mt-40">
        <div className="w-[200px] h-[50px] relative">
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/logo/wildcrafted-logo-dark.svg"
                : "/images/logo/wildcrafted-logo.svg"
            }
            alt="image logo"
            fill
            className="object-contain"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
