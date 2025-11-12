import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const categoryData = [
  {
    label: "Daily Expenses",
    amount: 589.99,
    percentage: 75,
    color: "bg-pink-500",
  },
  { label: "Health", amount: 767.5, percentage: 60, color: "bg-purple-500" },
  { label: "Children", amount: 490.51, percentage: 80, color: "bg-blue-500" },
  { label: "Banking", amount: 490.51, percentage: 75, color: "bg-teal-400" },
  { label: "House", amount: 490.51, percentage: 65, color: "bg-orange-400" },
  { label: "Banking", amount: 490.51, percentage: 73, color: "bg-sky-400" },
];


export const option1 = [
    {text: 'View details'},
    {text: 'Pending'},
    {text: 'Completed'},
    {text: 'Cancel'},
]

export const option2 = [
    {text: 'All'},
    {text: 'Active'},
    {text: 'Inactive'}
]

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
