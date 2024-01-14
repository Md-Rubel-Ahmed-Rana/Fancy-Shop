import apiSlice from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "http://localhost:5002/api/v1/user/register",
        method: "POST",
        body: data,
      }),
    }),
    getUniqueData: builder.query({
      query: () => ({
        url: "http://localhost:5002/api/v1/user/uniqueData",
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetUniqueDataQuery } = userApi;
