import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import mobileMenu from "./mobileMenu";
import projects from "./projects";
import reviews from "./reviews";
import resume from "./resume";

const store = configureStore({
  reducer: {
    auth: auth,
    mobileMenu: mobileMenu,
    projects: projects,
    reviews: reviews,
    resume: resume,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
