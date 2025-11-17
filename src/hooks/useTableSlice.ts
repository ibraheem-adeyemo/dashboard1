import {
  clearTableStateItem,
  selectTableData,
  setTableStateItem,
  TableState,
} from "@/redux/slices/table/tableSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useCallback } from "react";

interface UseTableReturn {
  tableState: TableState;
  setTableState: (data: Partial<TableState>) => void;
  clearTableState: () => void;
  getTableRecord: <K extends keyof TableState>(key: K) => TableState[K];
}

export const useTableSlice = (): UseTableReturn => {
  const dispatch = useAppDispatch();
  const tableState = useAppSelector(selectTableData);

  const setTableState = useCallback(
    (data: Partial<TableState>) => {
      dispatch(setTableStateItem(data));
    },
    [dispatch],
  );
  const clearTableState = useCallback(() => {
    dispatch(clearTableStateItem());
  }, [dispatch]);
  const getTableRecord = useCallback(
    <K extends keyof TableState>(key: K): TableState[K] => tableState[key],
    [tableState],
  );
  return { tableState, setTableState, clearTableState, getTableRecord };
};
