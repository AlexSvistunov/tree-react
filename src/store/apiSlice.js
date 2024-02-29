import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { URL } from '../utils/constants'

export const apiSlice = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories/all`
    }),
    getCategory: builder.query({
      query: (id) => `categories/${id}`
    }),

    getProducts: builder.query({
      query: () => `products/all`
    }),

    getProduct: builder.query({
      query: (id) => `products/${id}`,
     
    })
  })
})

export const {useGetCategoriesQuery, useGetCategoryQuery, useGetProductQuery, useGetProductsQuery} = apiSlice