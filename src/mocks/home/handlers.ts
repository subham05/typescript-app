import { http, HttpResponse } from "msw";
import { API_URL } from "@env";
import {
  announcementData,
  marketplaceData,
  upcomingData,
  upcomingExamData,
} from "./home.mock";

const GET_ANNOUNCEMENT_LIST = "getHAnnouncementList";
const GET_UPCOMING_LIST = "getUpcomingList";
const GET_EXAM_LIST = "getUpcomingExamList";
const GET_MARKETPLACE_LIST = "getMarketplaceList";
type HomeworkRequest = {
  filter: string;
  date: Date;
};
type MarketPlaceRequest = {
  filter: string;
  cost: string;
  sort: string;
};
export const homeHandlers = [
  http.post(`${API_URL}${GET_ANNOUNCEMENT_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as HomeworkRequest;
    const { filter } = newPost;
    if (filter === "Newest") {
      return HttpResponse.json(announcementData);
    } else return HttpResponse.json(announcementData);
  }),
  http.post(`${API_URL}${GET_UPCOMING_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as HomeworkRequest;
    const { filter } = newPost;
    if (filter === "Newest") {
      return HttpResponse.json(upcomingData);
    } else return HttpResponse.json(upcomingData);
  }),
  http.post(`${API_URL}${GET_EXAM_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as HomeworkRequest;
    const { filter } = newPost;
    if (filter === "Newest") {
      return HttpResponse.json(upcomingExamData);
    } else return HttpResponse.json(upcomingExamData);
  }),
  http.post(`${API_URL}${GET_MARKETPLACE_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as MarketPlaceRequest;
    const { filter } = newPost;
    if (filter === "Newest") {
      return HttpResponse.json(marketplaceData);
    } else return HttpResponse.json(marketplaceData);
  }),
];
