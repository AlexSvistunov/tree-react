import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../utils/constants";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/products/all`);
      if (!response.ok) {
        throw new Error("get products error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByDiscounted, filterByPriceRange } = productsSlice.actions;

export default productsSlice.reducer;
