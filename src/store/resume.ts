import { createSlice } from "@reduxjs/toolkit";

interface ResumeType {
  url: string | null;
}

const initialState: ResumeType = {
  url: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState: initialState,
  reducers: {
    SET_RESUME_URL: (state, action) => {
      state.url = action.payload;
    },
    REMOVE_RESUME_URL: (state) => {
      state.url = null;
    },
  },
});

export const { SET_RESUME_URL, REMOVE_RESUME_URL } = resumeSlice.actions;
export default resumeSlice.reducer;
