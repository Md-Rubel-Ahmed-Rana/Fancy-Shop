import apiSlice from "../api/apiSlice";
import Cookies from "js-cookie";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "http://localhost:5002/api/v1/user/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "http://localhost:5002/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getUniqueData: builder.query({
      query: () => ({
        url: "http://localhost:5002/api/v1/user/uniqueData",
      }),
    }),
    loggedInUser: builder.query({
      query: () => ({
        url: "http://localhost:5002/api/v1/auth/profile",
        headers: {
          authorization: Cookies.get("fsAccessToken"),
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetUniqueDataQuery,
  useLoginMutation,
  useLoggedInUserQuery,
} = userApi;
