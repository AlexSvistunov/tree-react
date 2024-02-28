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
      // const index = state.cartList.indexOf(action.payload)
      state.cartList.splice(action.payload, 1)
    },

    plusProduct : (state, action) => {
      state.cartList[action.payload].amount = state.cartList[action.payload].amount + 1
    },

    minusProduct : (state, action) => {
      state.cartList[action.payload].amount = state.cartList[action.payload].amount - 1
    }
  },
})

export const {addProductToCart, deleteProductFromCart, plusProduct, minusProduct} = cartSlice.actions
export default cartSlice.reducer