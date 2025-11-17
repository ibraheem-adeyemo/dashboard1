import { RootState } from "@/redux/store";
import { ProductListingProps } from "@/types/data.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import user from "./dummyUser.json";
import orders from "./dummyOrder.json";
import _ from "lodash";
import { products } from "@/utils/helpers";
import { dashboardData } from "./dashboard";

export type TableState = {
  pageSize: number;
  pageNumber: number;
};

interface Customer {
  id: string | number;
  [key: string]: any;
}

export interface InitialStateProps {
  dashboardStat: typeof dashboardData.performance.day;  
  products: Array<ProductListingProps>;
  tableItem: TableState;
  orders: typeof orders;
  customers: Customer[];
  allCustomersBackup: Customer[]; // for resetting after filtering
}

export const initialState: InitialStateProps = {
  dashboardStat: dashboardData.performance.day,
  products: products,
  orders: orders,
  customers: user.users,
  allCustomersBackup: user.users, // keep original copy
  tableItem: {
    pageSize: 10,
    pageNumber: 1,
  },
};

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    /** ---------------- TABLE CONTROLS ------------------- **/
    setTableStateItem: (state: InitialStateProps, action:PayloadAction) => {
      if (typeof action.payload === "object") {
        state.tableItem = _.mergeWith(
          state.tableItem,
          action.payload,
          (objValue, srcValue) => {
            if (_.isArray(objValue)) {
              return srcValue;
            }
          }
        );
      } else {
        console.log("payload is not an object");
      }
    },

    clearTableStateItem: (state:InitialStateProps) => {
      state.tableItem = initialState.tableItem;
    },

    // CREATE — Add a new customer
    addCustomer: (state: InitialStateProps, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
      state.allCustomersBackup.push(action.payload);
    },

    // UPDATE — Edit customer by ID
    editCustomer: (
      state: InitialStateProps,
      action: PayloadAction<{ id: string | number; data: Partial<Customer> }>
    ) => {
      const { id, data } = action.payload;
      const index = state.customers.findIndex((u) => u.id === id);

      if (index !== -1) {
        state.customers[index] = { ...state.customers[index], ...data };
      }

      const backupIndex = state.allCustomersBackup.findIndex((u) => u.id === id);
      if (backupIndex !== -1) {
        state.allCustomersBackup[backupIndex] = {
          ...state.allCustomersBackup[backupIndex],
          ...data,
        };
      }
    },

    deleteCustomer: (state: InitialStateProps, action: PayloadAction<string | number>) => {
      const id = action.payload;
      state.customers = state.customers.filter((u) => u.id !== id);
      state.allCustomersBackup = state.allCustomersBackup.filter((u) => u.id !== id);
    },

    filterCustomers: (
      state: InitialStateProps,
      action: PayloadAction<{ [key: string]: string | number }>
    ) => {
      const filters = action.payload;

      state.customers = state.allCustomersBackup.filter((user) =>
        Object.entries(filters).every(([key, value]) => {
          const field = String(user[key] ?? "").toLowerCase();
          return field.includes(String(value).toLowerCase());
        })
      );
    },

    // RESET after filtering
    resetCustomers: (state: InitialStateProps) => {
      state.customers = state.allCustomersBackup;
    },
  },
});

export const {
  setTableStateItem,
  clearTableStateItem,
  addCustomer,
  editCustomer,
  deleteCustomer,
  filterCustomers,
  resetCustomers,
} = dummySlice.actions;

export const selectDummyData = (state: RootState): InitialStateProps => {
    return state.dummy;
};

export default dummySlice.reducer;
