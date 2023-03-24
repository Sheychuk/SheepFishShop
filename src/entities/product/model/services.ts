import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Product } from 'shared/types'

export const productListApi = createApi({
  reducerPath: 'productListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  tagTypes: ['Products'],
  // refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    fetchProductsList: build.query<{ products: Product[] }, number>({
      query: (limit = 9) => ({
        url: '/products',
        params: {
          limit,
        },
      }),
    }),
    addProduct: build.mutation<Product, Partial<Product>>({
      query(body) {
        return {
          url: '/products/add',
          method: 'POST',
          body,
        }
      },
      // Invalidates all Product-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
})
