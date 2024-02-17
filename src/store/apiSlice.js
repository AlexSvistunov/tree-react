import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { URL } from '../utils/constants'

export const apiSlice = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `categories/all`
    }),
    getProduct: builder.query({
      query: (title) => `categories/${title}`
    })
  })
})

export const {useGetProductsQuery, useGetProductQuery} = apiSlice