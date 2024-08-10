import { http, HttpResponse } from "msw";
import { API_URL } from "@env";
import {
  attendanceData,
  attendanceMonthData,
  overallDetailsData,
} from "./attendance.mock";

const GET_ATTENDANCE_LIST = "getAttendanceList";
const GET_OVERALL = "getOverall";
type AttendanceRequest = {
  date: string | Date;
  type: string;
};
export const attendanceHandlers = [
  http.post(`${API_URL}${GET_ATTENDANCE_LIST}`, async ({ request }) => {
    const newPost = (await request.json()) as AttendanceRequest;
    const { type } = newPost;
    if (type === "Yearly") {
      return HttpResponse.json(attendanceData);
    } else return HttpResponse.json(attendanceMonthData);
  }),
  http.get(`${API_URL}${GET_OVERALL}/:Id`, () => {
    return HttpResponse.json(overallDetailsData);
  }),
];
