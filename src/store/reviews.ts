import {createSlice} from "@reduxjs/toolkit";

export interface Review {
  client: string;
  review: string;
  name: string;
  image: string;
  url: string;
}

const initialState: { isEmpty: boolean, data: Review[] } = {
  isEmpty: true,
  data: [],
}

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

export const {SET_REVIEWS, REMOVE_REVIEWS} =
  reviewsSlice.actions;
export default reviewsSlice.reducer;
