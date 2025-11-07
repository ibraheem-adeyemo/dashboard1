import DashboardGrid from "@/components/dashboard/DashboardGrid";
import SalesActivities from "@/components/sections/SalesActivities";
import { purchases } from "@/components/table/recentPurchases/purchases.data";
import PurchaseTable from "@/components/table/recentPurchases/PurchaseTable";

export default function DashboardPage() {
  return (
    <section>
      <div className="mb-[1rem]">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="text-gray-600">
          Here you can manage analytics, orders, and more.
        </p>
      </div>
      <SalesActivities />
      <DashboardGrid />
      {/* <PurchasesTable items={purchases} /> */}
      <PurchaseTable
        data={purchases}
        resultCount={purchases.length}
        isLoading={false}
      />
    </section>
  );
}
