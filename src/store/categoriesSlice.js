import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch('http://localhost:3333/categories/all')
      if(!response.ok) {
        throw new Error('get categories error')
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
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

export default categoriesSlice.reducer