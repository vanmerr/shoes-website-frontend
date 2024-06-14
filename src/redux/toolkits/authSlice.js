import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    role: "user",
  },
  reducers: {
    login(state, action) {
      return {
        isAuthenticated: !!localStorage.getItem("token"),
        role: action.payload,
      };
    },
    logout(state, action) {
      return {
        isAuthenticated: !!localStorage.getItem("token"),
        role: action.payload,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
