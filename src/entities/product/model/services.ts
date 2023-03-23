import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Product } from 'shared/types'

export const productListApi = createApi({
  reducerPath: 'productListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    fetchProductsList: build.query<{ products: Product[] }, number>({
      query: (limit = 9) => ({
        url: '/products',
        params: {
          limit,
        },
      }),
    }),
  }),
})
