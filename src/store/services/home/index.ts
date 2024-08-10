import { CreateApi } from "../createApi";
import {
  Announcement,
  ApiResponse,
  Exam,
  Marketplace,
  Upcoming,
} from "./types";

const GET_ANNOUNCEMENT_LIST = "getHAnnouncementList";
const GET_UPCOMING_LIST = "getUpcomingList";
const GET_EXAM_LIST = "getUpcomingExamList";
const GET_MARKETPLACE_LIST = "getMarketplaceList";
export const api = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncementList: builder.mutation<
      ApiResponse<Announcement[]>,
      { filter: string; date: Date }
    >({
      query: (params) => ({
        url: GET_ANNOUNCEMENT_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<Announcement[]>) => response,
    }),
    getUpcomingList: builder.mutation<
      ApiResponse<Upcoming[]>,
      { filter: string; date: Date }
    >({
      query: (params) => ({
        url: GET_UPCOMING_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<Upcoming[]>) => response,
    }),
    getUpcomingExamList: builder.mutation<
      ApiResponse<Exam[]>,
      { filter: string; date: Date }
    >({
      query: (params) => ({
        url: GET_EXAM_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<Exam[]>) => response,
    }),
    getMarketplaceList: builder.mutation<
      ApiResponse<Marketplace[]>,
      { filter: string; cost: string; sort: string }
    >({
      query: (params) => ({
        url: GET_MARKETPLACE_LIST,
        method: "POST",
        body: params,
      }),
      transformResponse: (response: ApiResponse<Marketplace[]>) => response,
    }),
  }),
});

export const {
  useGetAnnouncementListMutation,
  useGetUpcomingListMutation,
  useGetUpcomingExamListMutation,
  useGetMarketplaceListMutation,
} = api;

export default api;
