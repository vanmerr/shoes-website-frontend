import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./toolkits/authSlice";
import productSlice from "./toolkits/productsSlice";
import alertSlice from "./toolkits/alertSlice";
import quantityCartSlice from "./toolkits/quantityCartSlice";

export const store = configureStore({
    reducer: {
      auth: authSlice,
      products: productSlice,
      alert: alertSlice,
      quantityCart: quantityCartSlice
    },
  })

export default store;
