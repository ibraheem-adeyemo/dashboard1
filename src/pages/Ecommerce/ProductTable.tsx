"use client";

import React from "react";
import DataTable from "@/components/ui/table/data-table";
import StatusPill from "@/components/ui/table/status-pill";
import { ColumnDef } from "@tanstack/react-table";
import { ProductListingProps } from "@/types/data.type";
import RowActions from "@/components/table/recentPurchases/RowActions";
import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";

interface ProductTableProps {
  data: ProductListingProps[];
  isLoading: boolean;
  resultCount?: number;
}

type infoProps = { getValue: () => unknown };

interface RowProps {
  row: {
    original: ProductListingProps;
  };
}

export const ProductTable = ({
  data,
  isLoading,
  resultCount = data.length,
}: ProductTableProps) => {
  const columns: ColumnDef<ProductListingProps>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }: infoProps) => {
        console.log(row);
        return (
          <div>
            <Image
              src={row.original.image}
              alt={row.original.name}
              width={50}
              height={50}
            />
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }: infoProps) => {
        return (
          <div className="w-[14rem]">
            <h4 className="font-bold text-text-secondary">
              {row.original.name}
            </h4>
            <span className="text-[10px]">{row.original.description}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "sku",
      header: "SKU",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }: infoProps) => (
        <div className="text-text-secondary font-bold">
          {row.original.price}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info: infoProps) => (
        <StatusPill text={String(info.getValue())} isLoading={isLoading} />
      ),
    },
    {
      accessorKey: "qty",
      header: "QTY",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      accessorKey: "ratings",
      header: "Rating",
      cell: ({ row }: infoProps) => <StarRating rating={row.original.rating} />,
    },
    {
      accessorKey: "",
      header: "Sales",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: RowProps) => <RowActions />,
    },
  ];

  return (
    <div className="text-gray-500">
      <DataTable
        columns={columns}
        data={data}
        resultCount={resultCount}
        isLoading={isLoading}
      />
    </div>
  );
};
