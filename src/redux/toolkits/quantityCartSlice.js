import { createSlice } from "@reduxjs/toolkit";

const carts = JSON.parse(sessionStorage.getItem("carts")) || [];

const quantityCartSlice = createSlice({
    name: "quantityCart",
    initialState: {
        quantity: carts.length,
    },
    reducers: {
        loadQuantity: (state, action) => {
            return { quantity : JSON.parse(sessionStorage.getItem("carts")).length}
        }
    },
});

export const { loadQuantity } = quantityCartSlice.actions;

export default quantityCartSlice.reducer;