import { HttpResponse, http } from "msw";

import { API_URL } from "@env";
import { attendanceData, examData, performanceData } from "./reports.mock";
type AttendanceRequest = {
  date: string | Date;
};
const GET_ATTENDANCE_REPORT = "attendanceReport";
const GET_PERFORMANCE_REPORT = "performanceReport";
const GET_EXAM_REPORT = "examReport";
export const reportHandlers = [
  http.get(`${API_URL}${GET_PERFORMANCE_REPORT}`, () => {
    return HttpResponse.json(performanceData);
  }),
  http.get(`${API_URL}${GET_EXAM_REPORT}`, () => {
    return HttpResponse.json(examData);
  }),
  http.post(`${API_URL}${GET_ATTENDANCE_REPORT}`, async ({ request }) => {
    const newPost = (await request.json()) as AttendanceRequest;
    const { date } = newPost;
    if (date) {
      return HttpResponse.json(attendanceData);
    }
  }),
];
