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
    filtered: [],
  },

  reducers: {
    filterByDiscounted: (state) => {
      if (state.filtered.length) {
        state.filtered = state.filtered.filter(
          (product) => product["discont_price"]
        );
      } else {
        state.filtered = state.productsList.filter(
          (product) => product["discont_price"]
        );
      }
      // state.productsList = state.productsList.filter(product => product['discont_price'])
    },

    filterByPrice: (state, { payload }) => {
      const { priceFrom, priceTo } = payload.prices || { priceFrom: 0, priceTo: Infinity };
      console.log(payload);
      if (state.filtered.length) {
        state.filtered = state.filtered.filter(
          (product) => product.price >= priceFrom && product.price <= priceTo
        );
      } else {
        state.filtered = state.productsList.filter(
          (product) => product.price >= priceFrom && product.price <= priceTo
        );
      }
    },
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

export const { filterByDiscounted, filterByPrice } = productsSlice.actions;

export default productsSlice.reducer;
