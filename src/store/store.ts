import { configureStore } from "@reduxjs/toolkit";
import mobileMenu from "./mobile-menu";

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenu,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
