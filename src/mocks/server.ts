import { setupServer } from "msw/native";
import { profileHandlers } from "./profile/handlers";
import { reviewHandlers } from "./rating/handlers";
import { homeworkHandlers } from "./homework/handlers";
import { attendanceHandlers } from "./attendance/handlers";
import { reportHandlers } from "./reports/handlers";
import { homeHandlers } from "./home/handlers";
export const server = setupServer(
  ...profileHandlers,
  ...reviewHandlers,
  ...homeworkHandlers,
  ...attendanceHandlers,
  ...reportHandlers,
  ...homeHandlers
);

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
