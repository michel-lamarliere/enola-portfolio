import {createSlice} from "@reduxjs/toolkit";

export interface Project {
  name: string;
  description: string;
  pro: boolean;
  date: string;
  images: string[];
}

const initialState: { isEmpty: boolean, data: Project[] } = {
  isEmpty: true,
  data: [],
}

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    SET_PROJECTS: (state, action) => {
      state.isEmpty = false;
      state.data = action.payload;
    },
    REMOVE_PROJECTS: (state) => {
      state.isEmpty = true;
      state.data = [];
    },
  },
});

export const {SET_PROJECTS, REMOVE_PROJECTS} =
  projectsSlice.actions;
export default projectsSlice.reducer;
