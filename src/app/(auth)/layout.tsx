import React from 'react';
import Image from "next/image"

export default function Layout ({
    children
}: {children: React.ReactNode}){
  return (
    <div className="flex w-full justify-between">
        <div className="relative w-full md:w-1/2 h-screen">
            <Image src="/images/crm-bg-8.png" alt="login display images" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className="w-1/2 mt-40">
        {children}
        </div>       
    </div>
  )
}
