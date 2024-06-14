import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: "alert",
    initialState: {
        isAlert: false,
        message: "",
        type: "",
    },
    reducers: {
        onAlert(state, action) {
            return {
                isAlert: true,
                message: action.payload.message,
                type: action.payload.type
            }
        },
        offAlert(state, action) {
            return {
                isAlert: false,
                message: "",
                type: ""
            }
        },
    }
});

export const { onAlert, offAlert } = alertSlice.actions;
export default alertSlice.reducer;