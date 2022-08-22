import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    REMOVE_TOKEN: (state) => {
      state.token = null;
    },
  },
});

export const { SET_TOKEN, REMOVE_TOKEN } = authSlice.actions;
export default authSlice.reducer;
