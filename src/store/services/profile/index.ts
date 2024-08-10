import { CreateApi } from "../createApi";
import { ApiResponse, ProfileResponse, UploadResponse } from "./types";

const GET_PROFILE_QUERY = "profile";
const UPLOAD_IMAGE_QUERY = "uploadImage";

export const api = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<ProfileResponse>, void>({
      query: () => GET_PROFILE_QUERY,
      providesTags: ["Post"],
      transformResponse: (response: ApiResponse<ProfileResponse>) => response,
    }),
    uploadImage: builder.mutation<ApiResponse<UploadResponse>, FormData>({
      query: (formData) => ({
        url: UPLOAD_IMAGE_QUERY,
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Post"],
      transformResponse: (response: ApiResponse<UploadResponse>) => response,
    }),
  }),
});

export const { useGetProfileQuery, useUploadImageMutation } = api;

export default api;
