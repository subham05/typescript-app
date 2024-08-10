import { CreateApi } from "../createApi";
import {
  ApiResponse,
  AttendanceListResponse,
  OverallDetailsData,
} from "./types";

const GET_ATTENDANCE_LIST = "getAttendanceList";
const GET_OVERALL = "getOverall";
export const api = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAttendanceList: builder.mutation<
      ApiResponse<AttendanceListResponse>,
      { type: string; date: string | Date }
    >({
      query: (params) => ({
        url: GET_ATTENDANCE_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<AttendanceListResponse>) =>
        response,
    }),
    getOverallDetail: builder.query<
      ApiResponse<OverallDetailsData>,
      { Id: string }
    >({
      query: (params) => ({
        url: `${GET_OVERALL}/:${params.Id}`,
        method: "GET",
      }),
      transformResponse: (response: ApiResponse<OverallDetailsData>) =>
        response,
    }),
  }),
});

export const { useGetAttendanceListMutation, useGetOverallDetailQuery } = api;

export default api;
