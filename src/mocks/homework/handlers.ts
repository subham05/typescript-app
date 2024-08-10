import { http, HttpResponse } from "msw";
import { API_URL } from "@env";
import {
  homeworkData,
  homeworkData1,
  homeworkDetailsData,
  uploadData,
} from "./homework.mock";

const GET_HOMEWORK_LIST = "getHomeworkList";
const GET_HOMEWORK_DETAIL = "getHomeworkDetail";
const UPLOAD_HOMEWORK = "uploadHomework";
type HomeworkRequest = {
  filter: string;
  type: number;
};
export const homeworkHandlers = [
  http.post(`${API_URL}${GET_HOMEWORK_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as HomeworkRequest;
    const { filter, type } = newPost;
    if (filter === "All Subject" && type === 1) {
      return HttpResponse.json(homeworkData);
    } else return HttpResponse.json(homeworkData1);
  }),
  http.get(`${API_URL}${GET_HOMEWORK_DETAIL}/:homeworkId`, () => {
    return HttpResponse.json(homeworkDetailsData);
  }),
  http.post(`${API_URL}${UPLOAD_HOMEWORK}`, () => {
    return HttpResponse.json(uploadData);
  }),
];
