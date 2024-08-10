import { HttpResponse, http } from "msw";

import { API_URL } from "@env";
import { feedbackData, refreshData, reviewData } from "./rating.mock";

const GET_REVIEW_DATA = "reviews";
const GET_FEEDBACK_DATA = "feedback";
const REFRESH_URL = "users/refreshToken";
export const reviewHandlers = [
  http.get(`${API_URL}${GET_REVIEW_DATA}`, () => {
    return HttpResponse.json(reviewData);
    // return new HttpResponse(null, { status: 401, statusText: "Token Expired" });
  }),
  http.get(`${API_URL}${GET_FEEDBACK_DATA}`, () => {
    return HttpResponse.json(feedbackData);
  }),
  http.post(`${API_URL}${REFRESH_URL}`, () => {
    return HttpResponse.json(refreshData);
  }),
];
