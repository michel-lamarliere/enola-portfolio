import { createSlice } from "@reduxjs/toolkit";

import { ReviewType } from "types/review.types";

const initialState: { data: null | ReviewType[] } = {
  data: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {
    SET_REVIEWS: (state, action) => {
      state.data = action.payload;
    },
    REMOVE_REVIEWS: (state) => {
      state.data = null;
    },
  },
});

export const { SET_REVIEWS, REMOVE_REVIEWS } = reviewsSlice.actions;
export default reviewsSlice.reducer;
