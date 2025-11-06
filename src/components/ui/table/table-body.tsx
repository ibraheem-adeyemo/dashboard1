import { Skeleton } from "@mui/material";
import { flexRender, Row, Table } from "@tanstack/react-table";
import { StatusPillSkeleton } from "./status-pill";

interface TableBodyProps<TData> {
  table: Table<TData>;
  isLoading?: boolean;
}

type TableBodySkeletonProps = {
  rowCount?: number;
  columns: { id: string }[];
};

function TableBody<TData>({ table, isLoading }: TableBodyProps<TData>) {
  const rowCount =
    table.getRowModel().rows.length > 0 ? table.getRowModel().rows.length : 5;
  if (isLoading)
    return (
      <TableBodySkeleton
        columns={table.getVisibleFlatColumns().map((col) => ({ id: col.id }))}
        rowCount={rowCount}
      />
    );
  return (
    <tbody data-testid="table-body">
      {table.getRowModel().rows.map((row: Row<TData>) => (
        <tr
          key={row.id}
          className="border-button-outline-stroke-active bg-surface-primary border-b last:border-none"
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-4 py-4 text-left text-sm align-top">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

const TableBodySkeleton: React.FC<TableBodySkeletonProps> = ({
  rowCount = 5,
  columns,
}) => {
  return (
    <tbody data-testid="table-header-body">
      {Array.from({ length: rowCount }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="border-button-outline-stroke-active bg-surface-primary border-b last:border-none"
        >
          {columns.map((column, colIndex) => (
            <td key={colIndex} className="px-4 py-3">
              {column.id !== "status" ? (
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={14}
                  className="!rounded-full"
                  sx={{ bgcolor: "var(--input-fill-enabled)" }}
                />
              ) : (
                <StatusPillSkeleton />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
