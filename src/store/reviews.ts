import { createSlice } from "@reduxjs/toolkit";

import { ReviewType } from "types/review.types";

const initialState: { isEmpty: boolean; data: ReviewType[] } = {
  isEmpty: true,
  data: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {
    SET_REVIEWS: (state, action) => {
      state.isEmpty = false;
      state.data = action.payload;
    },
    REMOVE_REVIEWS: (state) => {
      state.isEmpty = true;
      state.data = [];
    },
  },
});

export const { SET_REVIEWS, REMOVE_REVIEWS } = reviewsSlice.actions;
export default reviewsSlice.reducer;
