import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    OPEN_MOBILE_MENU: (state) => {
      state.isOpen = true;
    },
    CLOSE_MOBILE_MENU: (state) => {
      state.isOpen = false;
    },
    TOGGLE_MOBILE_MENU: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU, TOGGLE_MOBILE_MENU } =
  mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
