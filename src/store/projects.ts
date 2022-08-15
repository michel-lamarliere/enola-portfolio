import { createSlice } from "@reduxjs/toolkit";

import { ProjectType } from "types/project.types";

const initialState: {
  isEmpty: boolean;
  data: ProjectType[];
  totalPhotos: number;
} = {
  isEmpty: true,
  totalPhotos: 0,
  data: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    SET_PROJECTS: (state, action) => {
      state.isEmpty = false;
      state.data = action.payload.data;
      state.totalPhotos = action.payload.totalPhotos;
    },
    REMOVE_PROJECTS: (state) => {
      state.isEmpty = true;
      state.totalPhotos = 0;
      state.data = [];
    },
  },
});

export const { SET_PROJECTS, REMOVE_PROJECTS } = projectsSlice.actions;
export default projectsSlice.reducer;
