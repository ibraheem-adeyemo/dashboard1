import { purchases } from "@/components/table/recentPurchases/purchases.data";
import PurchasesTable from "@/components/table/recentPurchases/PurchasesTable";

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <p className="text-gray-600">
        Here you can manage analytics, orders, and more.
      </p>
      <PurchasesTable items={purchases} />
    </section>
  );
}
