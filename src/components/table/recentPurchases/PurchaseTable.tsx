"use client";

import React from "react";
import { Purchase } from "./purchases.data";
import DataTable from "@/components/ui/table/data-table";
import StatusPill from "@/components/ui/table/status-pill";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

interface PurchaseTableProps {
  data: Purchase[];
  isLoading: boolean;
  resultCount?: number;
}

type infoProps = { getValue: () => unknown };

interface RowProps {
  row: {
    original: { id: string | number };
  };
}

const PurchaseTable = ({
  data,
  isLoading,
  resultCount = data.length,
}: PurchaseTableProps) => {
  const columns: ColumnDef<Purchase>[] = [
    {
      accessorKey: "product",
      header: "Products",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "orderId",
      header: "Order ID",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info: infoProps) => (
        <StatusPill text={String(info.getValue())} isLoading={isLoading} />
      ),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: RowProps) => (
        <div>
          <Link href="">View details</Link>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      resultCount={resultCount}
      isLoading={isLoading}
    />
  );
};

export default PurchaseTable;
