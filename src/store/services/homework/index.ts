import { CreateApi } from "../createApi";
import {
  ApiResponse,
  HomeworkListResponse,
  HomeworkDetailResponse,
  UploadApiResponse,
} from "./types";

const GET_HOMEWORK_LIST = "getHomeworkList";
const GET_HOMEWORK_DETAIL = "getHomeworkDetail";
const UPLOAD_HOMEWORK = "uploadHomework";
export const api = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getHomeworkList: builder.mutation<
      ApiResponse<HomeworkListResponse[]>,
      { filter: string; type: number; date: Date }
    >({
      query: (params) => ({
        url: GET_HOMEWORK_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<HomeworkListResponse[]>) =>
        response,
    }),
    getHomeworkDetail: builder.query<
      ApiResponse<HomeworkDetailResponse>,
      { homeworkId: string }
    >({
      query: (params) => ({
        url: `${GET_HOMEWORK_DETAIL}/:${params.homeworkId}`,
        method: "GET",
      }),
      transformResponse: (response: ApiResponse<HomeworkDetailResponse>) =>
        response,
    }),
    uploadHomework: builder.mutation<UploadApiResponse, FormData>({
      query: (formData) => ({
        url: UPLOAD_HOMEWORK,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Post"],
      transformResponse: (response: UploadApiResponse) => response,
    }),
  }),
});

export const {
  useGetHomeworkListMutation,
  useGetHomeworkDetailQuery,
  useUploadHomeworkMutation,
} = api;

export default api;
