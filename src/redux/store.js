import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./toolkits/authSlice";
import productSlice from "./toolkits/productsSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice,
      products: productSlice,
    },
  })

export default store;
