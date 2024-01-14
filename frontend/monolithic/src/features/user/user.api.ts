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
      invalidatesTags: ["user"] as any,
    }),
    uploadProfileImage: builder.mutation({
      query: ({ profileImage, id }) => ({
        url: `http://localhost:5002/api/v1/user/uploadProfile/${id}`,
        method: "PATCH",
        body: { profileImage },
      }),
      invalidatesTags: ["user"] as any,
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "http://localhost:5002/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"] as any,
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
      providesTags: ["user"] as any,
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetUniqueDataQuery,
  useLoginMutation,
  useLoggedInUserQuery,
  useUploadProfileImageMutation,
} = userApi;
