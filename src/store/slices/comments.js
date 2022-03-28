import { createSlice } from "@reduxjs/toolkit";

// files
import { mockComments } from "store/api";

const initialState = mockComments;

export const name = "comments";

const commentsSlice = createSlice({
  name,
  initialState,
  reducers: {
    commentAdded(state, action) {
      // state.unshift() instead of state.push() so that new comments a displayed at the top of the comment list
      state.unshift(action.payload);
    },
  },
});

export const { commentAdded } = commentsSlice.actions;

export default commentsSlice.reducer;
