import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { baseApi as api } from '../services/base-api';
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import tableSlice from "./slices/table/tableSlice";
import dummySlice from "./slices/dummy/dummySlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

const rootReducer = combineReducers({
  dummy: dummySlice,
  table: tableSlice,
  cart: cartSlice,
  wishList: wishlistSlice,
  //   [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["dummy"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

// For Testing
export const testStore = () => {
  return configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([]), //[api.middleware]
  });
};

const store = configureStore({
  reducer: persistReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]), //[api.middleware]
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof testStore>;
export type AppDispatch = AppStore["dispatch"];

export { persistor, store };

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
