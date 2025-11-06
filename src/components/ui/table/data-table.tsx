"use client";

import React, { useEffect, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import PaginationFooter from "./table-pagination";

import clsx from "clsx";
import Button from "@/components/forms/custom-button";
import { useTableSlice } from "@/hooks/useTableSlice";

interface DataTableProps<T> {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  resultCount?: number;
  isLoading?: boolean;
  title?: string;
  subTitle?: string;
  tableStyles?: string;
  buttonText?: string;
  showButton?: boolean;
  showTableTitle?: boolean;
  buttonClick?: () => void;
  showDownload?: boolean;
  downloadText?: string;
  downloadClick?: () => void;
  downloadClassName?: string;
  downloadIconClassName?: string;
  refreshFunc?: () => void;
}

function DataTable<T>({
  columns,
  data,
  isLoading,
  title,
  subTitle,
  showButton,
  showTableTitle,
  buttonText,
  buttonClick,
  showDownload,
  downloadText,
  downloadClick,
  downloadClassName,
  downloadIconClassName,
  resultCount,
  refreshFunc,
  tableStyles,
}: Readonly<DataTableProps<T>>) {
  const [isRotating, setIsRotating] = useState(false);

  const handleRefresh = () => {
    if (refreshFunc) {
      setIsRotating(true);
      refreshFunc();

      setTimeout(() => setIsRotating(false), 200);
    }
  };
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const { setTableState } = useTableSlice();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    manualPagination: true,
    rowCount: resultCount || data.length,
    pageCount: Math.ceil((resultCount || data.length) / pagination.pageSize),
  });

  useEffect(() => {
    setTableState({
      pageSize: pagination.pageSize,
      pageNumber: pagination.pageIndex + 1,
    });
  }, [pagination]);

  const pageCount = table.getPageCount();

  return (
    <div className="font-dmsan relative" data-testid="data-table">
      <div
        className={`border-button-outline-stroke-active overflow-x-auto overflow-y-auto rounded-t-lg border ${tableStyles}`}
      >
        {showTableTitle && (
          <div className="bg-surface-primary flex items-center justify-between px-4 py-5">
            <div className="space-y-1">
              <p className="text-text-primary flex items-center gap-2 text-xl font-bold">
                <span>{title}</span>{" "}
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="flex cursor-pointer items-center"
                  aria-label="refresh"
                  disabled={isLoading}
                >
                  <span className="sr-only">refresh</span>{" "}
                  <span
                    className={clsx(
                      "mb-[-3px] inline-block transition-transform duration-300",
                      {
                        "rotate-[-90deg]": isRotating,
                      },
                    )}
                  >
                    {/* <RefreshIcon className="text-pop-blue" /> */}
                  </span>
                </button>
              </p>
              <p className="text-text-secondary font-normal">{subTitle}</p>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              {showDownload && (
                <Button
                  text={downloadText}
                  className={
                    downloadClassName ??
                    `border-button-primary-fill-enabled !text-button-primary-fill-enabled flex !h-fit !w-fit items-center gap-2 border !bg-transparent !py-2 font-semibold`
                  }
                  onClick={downloadClick}
                  //   rightIcon={
                  //     <DownloadDataIcon
                  //       className={
                  //         downloadIconClassName ??
                  //         "text-button-primary-fill-enabled"
                  //       }
                  //     />
                  //   }
                />
              )}

              {showButton && (
                <Button
                  text={buttonText}
                  className="text-button-primary-label-all !h-fit max-w-[10rem] min-w-fit px-8 !py-2 font-semibold"
                  onClick={buttonClick}
                />
              )}
            </div>
          </div>
        )}
        <table className="h-full w-full">
          <TableHeader table={table} isLoading={isLoading} />
          <TableBody table={table} isLoading={isLoading} />
        </table>
        <PaginationFooter
          table={table}
          resultCount={resultCount}
          isLoading={isLoading}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
}

export default DataTable;
