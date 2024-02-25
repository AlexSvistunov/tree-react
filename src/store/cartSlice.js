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
      const index = state.cartList.indexOf(action.payload)
      state.cartList.splice(index, 1)
    },
  },
})

export const {addProductToCart, deleteProductFromCart} = cartSlice.actions
export default cartSlice.reducer