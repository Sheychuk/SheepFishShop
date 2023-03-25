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

      // Provides a list of `Products` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.products.map(({ id }) => ({ type: 'Products', id } as const)),
              { type: 'Products', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Products', id: 'LIST' }],
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
    deleteProduct: build.mutation<{ id: number }, number>({
      query(id) {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Product `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Products', id }],
    }),
  }),
})
