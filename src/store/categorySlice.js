import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const getCategory = createAsyncThunk(
  'category/getCategory',
  async () => {

  }
)


const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoriesList: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesList = action.payload
      state.isLoading = false
    })

    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false
    })


  },
})