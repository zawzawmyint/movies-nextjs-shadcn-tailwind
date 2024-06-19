"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriates: [],
};
// favoriates: JSON.parse(localStorage.getItem("favoriates")) || [],

export const favoriateSlice = createSlice({
  name: "favoriate",
  initialState,
  reducers: {
    addToFavoraites: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favoriates = [actions.payload, ...state.favoriates];

      // localStorage.setItem("favoriates", JSON.stringify(state.favoriates));
    },
    removeFromFavoraites: (state, actions) => {
      state.favoriates = state.favoriates.filter(
        (item) => item.id !== actions.payload
      );
      // localStorage.setItem("favoriates", JSON.stringify(state.favoriates));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavoraites, removeFromFavoraites } = favoriateSlice.actions;

export default favoriateSlice.reducer;
