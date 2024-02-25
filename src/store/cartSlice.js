import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },

  reducers: {
    addProductToCart: (state, action) => {
      state.cartList.push(action.payload)
    },
    deleteProductFromCart: (state, action) => {
      state.cartList.splice(action.payload, 1)
    },
  },
})

export const {addProductToCart, deleteProductFromCart} = cartSlice.actions
export default cartSlice.reducer