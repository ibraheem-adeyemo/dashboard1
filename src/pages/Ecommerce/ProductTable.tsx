"use client";

import React from "react";
import DataTable from "@/components/ui/table/data-table";
import StatusPill from "@/components/ui/table/status-pill";
import { ColumnDef } from "@tanstack/react-table";
import { ProductListingProps } from "@/types/data.type";
import RowActions from "@/components/table/recentPurchases/RowActions";
import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import { option1, option2 } from "@/redux/store";

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
    const onDropdown = () => console.log('e');
  const columns: ColumnDef<ProductListingProps>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }: RowProps) => {
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
      cell: ({ row }: RowProps) => {
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
      cell: ({ row }: RowProps) => (
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
      cell: ({ row }: RowProps) => <StarRating rating={row.original.rating} />,
    },
    {
      accessorKey: "",
      header: "Sales",
      cell: (info: infoProps) => info.getValue(),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: RowProps) => <RowActions options={option1} />,
    },
  ];

  return (
    <div className="text-gray-500 border border-button-outline-stroke-active">
        <div className="flex justify-between m-[2rem]">
            <span className="font-bold">Listings</span>
            <RowActions onSelect={onDropdown} options={option2} />
        </div>
      <DataTable
        columns={columns}
        data={data}
        resultCount={resultCount}
        isLoading={isLoading}
      />
    </div>
  );
};
