import { createSlice } from "@reduxjs/toolkit";

import { ProjectType } from "types/project.types";

const initialState: {
  data: null | ProjectType[];
  totalPhotos: number;
} = {
  totalPhotos: 0,
  data: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    SET_PROJECTS: (state, action) => {
      state.data = action.payload.data;
      state.totalPhotos = action.payload.totalPhotos;
    },
    REMOVE_PROJECTS: (state) => {
      state.totalPhotos = 0;
      state.data = null;
    },
  },
});

export const { SET_PROJECTS, REMOVE_PROJECTS } = projectsSlice.actions;
export default projectsSlice.reducer;
