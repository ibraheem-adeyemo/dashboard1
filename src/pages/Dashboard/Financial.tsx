"use client";

import React from "react";
import { TrendingUp, DollarSign, Wallet, PieChart } from "lucide-react";
import { StatCard2 } from "@/components/ui/cards/statCard";
import { WalletCard } from "@/components/ui/cards/WalletCard";
import ExpensesChart, {
  ExpensesCard,
} from "@/components/ui/cards/ExpensesCard";
import { BestSellersCard } from "@/components/ui/cards/BestSellersCard";
import CategoryStatsCard from "@/components/ui/cards/CategoryStatsCard";
import { selectCategoryData } from "@/redux/slices/dataSlice";
import { useAppSelector } from "@/hooks/reduxHooks";
import CreditCardSection from "@/components/ui/cards/CreditCardSection";

const sampleData = [
  { value: 40 },
  { value: 35 },
  { value: 45 },
  { value: 30 },
  { value: 55 },
  { value: 50 },
];

const Financials = () => {
  const categoryData = useAppSelector(selectCategoryData);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <StatCard2
          icon={<TrendingUp />}
          title="Total Income"
          value="$57.9k"
          percentage={5}
          color="#10b981"
          data={sampleData}
        />
        <StatCard2
          icon={<DollarSign />}
          title="Expenses"
          value="$57.9k"
          percentage={-5}
          color="#ef4444"
          data={sampleData}
        />
        <StatCard2
          icon={<Wallet />}
          title="Cash on Hand"
          value="$57.9k"
          percentage={5}
          color="#3b82f6"
          data={sampleData}
        />
        <StatCard2
          icon={<PieChart />}
          title="Profit Margin"
          value="$57.9k"
          percentage={-5}
          color="#f97316"
          data={sampleData}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <WalletCard />
        <ExpensesChart />
        <BestSellersCard />
      </div>
      <div>
        <div className="py-10 flex flex-col md:flex-row gap-6 ">
          <div className="md:w-3/5 w-full">
            <CategoryStatsCard title="Categories Static" data={categoryData} />
          </div>
          <div className="md:w-2/5 w-full">
            <CreditCardSection
              title="create card"
              buttonText="click button"
              imageSrc="/images/credit-card-placeholder.png"
              onButtonClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;
