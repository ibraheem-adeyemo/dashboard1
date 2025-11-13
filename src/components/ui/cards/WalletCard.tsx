import React from "react";
import { MoreVertical, Briefcase } from "lucide-react";
// import visaIcon from "/images/icons/icon-Visa.svg";
// import masterIcon from "/images/icons/icon-master-card.svg";
import Image from "next/image";

export const WalletCard = () => {
  const wallets = [
    {
      id: 1,
      number: "8752**** **** 6325",
      amount: "$25,600.00",
      icon: "/images/icons/icon-Visa.svg",
    },
    {
      id: 2,
      number: "9872 **** **** 2356",
      amount: "$34,180.20",
      icon: "/images/icons/icon-master-card.svg",
    },
    { id: 3, number: "Cumulative total", amount: "$59,780.20", icon: null },
  ];

  return (
    <div className="bg-neutral-bg rounded-2xl p-5 shadow-md flex flex-col justify-between min-w-[280px]">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-gray-400">Your wallet</p>
        <MoreVertical size={16} className="text-gray-500 cursor-pointer" />
      </div>

      <div className="flex flex-col gap-4">
        {wallets.map((wallet, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">{wallet.number}</p>
              <p className="text-sm font-semibold text-white">
                {wallet.amount}
              </p>
            </div>
            <div className="w-12 h-8 bg-neutral-accent rounded grid place-items-center">
              {wallet.icon ? (
                <Image
                  src={wallet.icon}
                  width={200}
                  height={100}
                  alt="card"
                  className="w-6 h-4 object-contain"
                />
              ) : (
                <Briefcase size={16} className="text-gray-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
