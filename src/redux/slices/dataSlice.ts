import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { categoryData as initialCategoryData } from "@/data";

export interface CategoryDataItem {
  label: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface DataSliceState {
  categoryData: CategoryDataItem[];
}

export const initialState: DataSliceState = {
  categoryData: initialCategoryData,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const selectCategoryData = (state: RootState): CategoryDataItem[] => {
  return state.data.categoryData;
};

export default dataSlice.reducer;
