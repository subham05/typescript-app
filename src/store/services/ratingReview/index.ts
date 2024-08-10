import { CreateApi } from "../createApi";
import { ApiResponse, Feedback, Review } from "./types";
const GET_REVIEWS_QUERY = "reviews";
const GET_FEEDBACK_QUERY = "feedback";
const reviewApi = CreateApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<ApiResponse<Review[]>, void>({
      query: () => GET_REVIEWS_QUERY,
      transformResponse: (response: ApiResponse<Review[]>) => response,
    }),
    getFeedback: builder.query<ApiResponse<Feedback[]>, void>({
      query: () => GET_FEEDBACK_QUERY,
      transformResponse: (response: ApiResponse<Feedback[]>) => response,
    }),
  }),
});

export const { useGetReviewsQuery, useGetFeedbackQuery } = reviewApi; // Export the new query hook

export default reviewApi; // Default export for the API
