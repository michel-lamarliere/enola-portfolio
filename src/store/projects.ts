import {createSlice} from "@reduxjs/toolkit";

export interface Review {
  client: string;
  text: string;
  person: string;
  image: string;
  link: string;
}

const initialState: { isEmpty: boolean, data: Review[] } = {
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
