import { configureStore } from "@reduxjs/toolkit";
import favoriateReducer from "./features/favoriates/favoriateSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favoriate: favoriateReducer,
    },
  });
};
