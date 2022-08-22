import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import mobileMenu from "./mobile-menu";
import projects from "./projects";
import reviews from "./reviews";

const store = configureStore({
  reducer: {
    auth: auth,
    mobileMenu: mobileMenu,
    projects: projects,
    reviews: reviews,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
