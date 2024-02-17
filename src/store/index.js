import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getMiddleWare) => getMiddleWare().concat(apiSlice.middleware)
})