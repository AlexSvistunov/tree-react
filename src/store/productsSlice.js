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
    initialList : [],
    productsList: [],
  },

  // priceTo, priceFromect

  reducers: {
    filterByDiscounted: (state) => {
      state.productsList = state.productsList.filter(product => product['discont_price'])

    },

    filterByPriceRange: (state, action) => {
      const { priceFrom, priceTo } = action.payload;

      state.productsList = state.initialList.filter(product => {
        let passDiscounted = true;
    
        if (state.isChecked) {
          passDiscounted = product['discont_price'];
        }
    
        if (priceFrom && priceTo) {
          return product.price >= priceFrom && product.price <= priceTo && passDiscounted;
        } else if (priceFrom) {
          return product.price >= priceFrom && passDiscounted;
        } else if (priceTo) {
          return product.price <= priceTo && passDiscounted;
        } else {
          return passDiscounted;
        }
      });


    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.initialList = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByDiscounted, filterByPriceRange } = productsSlice.actions;

export default productsSlice.reducer;
