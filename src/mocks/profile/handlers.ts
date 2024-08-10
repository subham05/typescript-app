import { HttpResponse, http } from "msw";
import { profileData, uploadData } from "./profile.mock";
import { API_URL } from "@env";

const GET_PROFILE_QUERY = "profile";
const UPLOAD_IMAGE_QUERY = "uploadImage";
export const profileHandlers = [
  http.get(`${API_URL}${GET_PROFILE_QUERY}`, () => {
    return HttpResponse.json(profileData);
  }),
  http.post(`${API_URL}${UPLOAD_IMAGE_QUERY}`, () => {
    return HttpResponse.json(uploadData);
  }),
];
