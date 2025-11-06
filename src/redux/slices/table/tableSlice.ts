import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { RootState } from "../../store/store";

export type TableState = {
  pageSize: number;
  pageNumber: number;
};

export const initialState: { tableItem: TableState } = {
  tableItem: {
    pageSize: 10,
    pageNumber: 1,
  },
};

const crudSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTableStateItem: (state, action) => {
      if (typeof action.payload === "object") {
        state.tableItem = _.mergeWith(
          state.tableItem,
          action.payload,

          (objValue, srcValue) => {
            if (_.isArray(objValue)) {
              return srcValue;
            }
          },
        );
      } else {
        console.log("payload is not an object");
      }
    },

    clearTableStateItem: (state) => {
      state.tableItem = initialState.tableItem;
    },
  },
});

export const { setTableStateItem, clearTableStateItem } = crudSlice.actions;

export const selectTableData = (state: RootState): TableState => {
  return state.table.tableItem;
};

export default crudSlice.reducer;
