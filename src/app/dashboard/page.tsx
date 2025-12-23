import DashboardGrid from "@/components/dashboard/DashboardGrid";
import SalesActivities from "@/components/sections/SalesActivities";
import { purchases } from "@/components/table/recentPurchases/purchases.data";
import PurchaseTable from "@/components/table/recentPurchases/PurchaseTable";

export default function DashboardPage() {
  return (
    <section>
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
