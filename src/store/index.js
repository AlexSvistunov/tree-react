import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import { apiSlice } from "./apiSlice";
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'



export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
  },

  middleware: (getMiddleWare) => getMiddleWare().concat(apiSlice.middleware)
})

