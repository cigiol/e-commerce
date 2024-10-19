import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@utils/axiosBaseQuery";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        path: `products`,
      }),
    }),
    getProductById: builder.query({
      query: ({ id }) => ({
        method: "GET",
        path: `products/${id}`,
      }),
    }),
  }),
});

export const appApiReducerName = appApi.reducerPath;
export const appApiReducer = appApi.reducer;
export const appApiMiddleware = appApi.middleware;

export const { useGetProductsQuery, useGetProductByIdQuery } = appApi;
