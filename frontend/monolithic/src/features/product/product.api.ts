import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "http://localhost:5000/api/v1/products",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
