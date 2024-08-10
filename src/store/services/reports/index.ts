import { CreateApi } from "../createApi";
import {
  ApiResponse,
  AttendanceReport,
  ExamReport,
  PerformanceReport,
} from "./types";
const GET_ATTENDANCE_REPORT = "attendanceReport";
const GET_PERFORMANCE_REPORT = "performanceReport";
const GET_EXAM_REPORT = "examReport";
const reportApi = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAttendanceReport: builder.mutation<
      ApiResponse<AttendanceReport[]>,
      { date: string | Date }
    >({
      query: (params) => ({
        url: GET_ATTENDANCE_REPORT,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<AttendanceReport[]>) =>
        response,
    }),
    getPerformanceReport: builder.query<ApiResponse<PerformanceReport>, void>({
      query: () => GET_PERFORMANCE_REPORT,
      transformResponse: (response: ApiResponse<PerformanceReport>) => response,
    }),
    getExamReport: builder.query<ApiResponse<ExamReport>, void>({
      query: () => GET_EXAM_REPORT,
      transformResponse: (response: ApiResponse<ExamReport>) => response,
    }),
  }),
});

export const {
  useGetPerformanceReportQuery,
  useGetExamReportQuery,
  useGetAttendanceReportMutation,
} = reportApi; // Export the new query hook

export default reportApi; // Default export for the API
