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

type Period = keyof typeof dashboardData.performance;

export interface InitialStateProps {
  selectedPeriod: Period;  
  dashboardStat: (typeof dashboardData.performance)[Period];  
  products: Array<ProductListingProps>;
  tableItem: TableState;
  orders: typeof orders;
  customers: Customer[];
  allCustomersBackup: Customer[]; // for resetting after filtering
  users: Customer[];
  info: {status: string; message: string},
  isUserLoggedIn: boolean
}

export const initialState: InitialStateProps = {
    selectedPeriod: 'day',  
  dashboardStat: dashboardData.performance.day,
  products: products,
  orders: orders,
  customers: user.customers,
  allCustomersBackup: user.customers, // keep original copy
  tableItem: {
    pageSize: 10,
    pageNumber: 1,
  },
  users: [],
  info: {status: '', message: ''},
  isUserLoggedIn: false
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
    registerAUser: (state: InitialStateProps, action: PayloadAction) => {
        const lastUser = state.users?.reverse()[0] || undefined;

        const userRegistered = state.users?.find(user => user.email === action.payload.email)
        if(userRegistered) {
            state.info = {status: 'error', message: 'You have already created an account'}
            return
        }
        const id = lastUser ? Number(lastUser.id) + 1: 1
        state.users.push({id, ...action.payload})
        state.info = {status: 'success', message: 'You have successfuly created an account'}
    },
    login: (state: InitialStateProps, action: PayloadAction) => {
        console.log(state, action.payload, 'payload    ====1')
        const userRegistered = state.users.find(user => user.email === action.payload.email)
        if(userRegistered && userRegistered.password === action.payload.password ) {
            state.isUserLoggedIn = true;
        } else {
            console.log(action.payload, 'payload    ====2')
            state.info = { status: "error", message: "User can not be found"}
        }
    },
    logout: (state: InitialStateProps, action: PayloadAction) => {
        state.isUserLoggedIn = false
    },
    updatePeriod: (state:InitialStateProps, action: PayloadAction<Period>) => {
        state.selectedPeriod = action.payload;
        state.dashboardStat = dashboardData.performance[state.selectedPeriod]
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
    updatePeriod,
  setTableStateItem,
  clearTableStateItem,
  addCustomer,
  editCustomer,
  deleteCustomer,
  filterCustomers,
  resetCustomers,
  registerAUser,
  login,
  logout
} = dummySlice.actions;

export const selectDummyData = (state: RootState): InitialStateProps => {
    return state.dummy;
};

export default dummySlice.reducer;
