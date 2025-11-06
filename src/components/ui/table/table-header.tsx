import { Skeleton } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";

export interface TableHeaderProps<TData> {
  table: Table<TData>;
  isLoading?: boolean;
  headerStyles?: string;
}

const TableHeader = <TData,>({
  table,
  isLoading,
  headerStyles,
}: TableHeaderProps<TData>) => {
  if (isLoading)
    return (
      <TableHeaderSkeleton columnCount={table.getVisibleFlatColumns().length} />
    );
  return (
    <thead
      className="bg-input-fill-enabled text-text-primary"
      data-testid="table-header"
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const isSorted = header.column.getIsSorted();
            let sortIndicator = "";

            if (isSorted === "asc") {
              sortIndicator = " ↑";
            } else if (isSorted === "desc") {
              sortIndicator = " ↓";
            }

            return (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className={`${headerStyles} cursor-pointer px-4 py-2 text-left text-sm font-semibold`}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                <span className="text-xs">{sortIndicator}</span>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;

type TableHeaderSkeletonProps = {
  columnCount: number;
};

export const TableHeaderSkeleton: React.FC<TableHeaderSkeletonProps> = ({
  columnCount,
}) => {
  return (
    <thead
      data-testid="table-header-skeleton"
      className="bg-input-fill-enabled"
    >
      <tr>
        {Array.from({ length: columnCount }).map((_, idx) => (
          <th key={idx} className="px-4 py-3">
            <span className="sr-only">heading</span>
            <Skeleton
              variant="rounded"
              className="!rounded-full"
              width={70}
              height={16}
              sx={{ bgcolor: "var(--input-fill-enabled)" }}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
