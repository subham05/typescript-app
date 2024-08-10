import { Platform } from "react-native";
import { RootState } from "src/store";
export const errorStatusArray = [
  "Task is rejected, can not perform operation",
  "Task is accepted, can not perform operation",
  "Task is inprogress, can not perform operation",
  "Task is awaitingapproval, can not perform operation",
  "Task is completed, can not perform operation",
  "Task is reopened, can not perform operation",
  "Task name is invalid!",
];
export const FETCH_ERROR = "FETCH_ERROR";
export const UNAUTHORIZED = 401;
export const CONFLICT = 409;
export const VALIDATION_ERROR = 422;
export const OS_TYPE = Platform.OS === "android" ? "ANDROID" : "IOS" || "";
export const OS_VERSION = Platform.Version.toString() || "";
export const selectToken = (state: RootState) => state.authReducer.userToken;
export const REFRESH_URL = "users/refreshToken";
