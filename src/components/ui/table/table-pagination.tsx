import React from "react";
import { Table } from "@tanstack/react-table";
import { Skeleton } from "@mui/material";
import { CustomSelect } from "../select/custom-select";
import { ArrowLeft, ArrowRight } from "@/assets/icons/dashboardIcons";

type PaginationFooterProps<T> = {
  table: Table<T>;
  resultCount?: number;
  isLoading?: boolean;
  pageCount?: number;
};

const pageSizeOptions = [3, 5, 10, 20, 30, 40, 50].map((size) => ({
  label: size.toString(),
  value: size.toString(),
}));

function PaginationFooter<T>({
  table,
  resultCount,
  isLoading,
  pageCount,
}: PaginationFooterProps<T>) {
  if (isLoading) return <PaginationFooterSkeleton />;

  return (
    <div
      data-testid="table-pagination"
      className="border-button-outline-stroke-active bg-surface-primary text-primary-blue-400 flex items-center justify-between border-t px-4 py-3 text-sm font-semibold"
    >
      <div>
        {resultCount !== undefined ? (
          <span>{resultCount} results found</span>
        ) : (
          <span>{table.getFilteredRowModel().rows.length} results found</span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="text-primary-blue-400 flex items-center gap-1">
          <span>Rows per page:</span>
          <CustomSelect
            value={String(table.getState().pagination.pageSize)}
            onChange={(value) => table.setPageSize(Number(value))}
            options={pageSizeOptions}
            placeholder="Rows"
            testIdPrefix="page-size"
            triggerClassName="!w-[65px]"
          />
        </div>

        {/* Pagination buttons */}
        <div className="text-text-secondary flex items-center gap-2">
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-text-primary disabled:opacity-50"
          >
            <span className="sr-only">previous</span>
            <ArrowLeft />
          </button>
          <span>
            {table.getState().pagination.pageIndex + 1}-{pageCount} of{" "}
            {pageCount}
          </span>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-text-primary disabled:opacity-50"
          >
            <span className="sr-only">next</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginationFooter;

const PaginationFooterSkeleton = () => {
  return (
    <div
      data-testid="pagination-skeleton"
      className="bg-surface-primary border-button-outline-stroke-active flex items-center justify-between border-t px-4 py-2"
    >
      <Skeleton
        variant="rounded"
        className="!rounded-full"
        width={100}
        height={20}
        sx={{ bgcolor: "var(--input-fill-enabled)" }}
      />
      <Skeleton
        variant="rounded"
        className="!rounded-full"
        width={150}
        height={20}
        sx={{ bgcolor: "var(--input-fill-enabled)" }}
      />
    </div>
  );
};
