import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },

  reducers: {
    addProductToCart: (state, action) => {
      state.cartList.push(action.payload)
    }
  },
})

export const {addProductToCart} = cartSlice.actions
export default cartSlice.reducer