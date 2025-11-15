import { RootState } from "@/redux/store";
import { ProductListingProps } from "@/types/data.type";
import { createSlice } from "@reduxjs/toolkit";
import user from "./dummyUser.json"
import orders from "./dummyOrder.json"
import _ from "lodash";
import { products } from "@/utils/helpers";


export type TableState = {
  pageSize: number;
  pageNumber: number;
};

interface InitialStateProps {
    products:Array<ProductListingProps>;
    tableItem: TableState;
    orders: typeof orders
    customers: typeof user.users
}

export const initialState:InitialStateProps  = {
    products: products,
    orders: orders,
    customers: user.users,
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
  return state.table?.tableItem;
};

export default crudSlice.reducer;
