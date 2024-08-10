// Need to use the React-specific entry point to import createApi
import { showToast } from "@common/components/toastMessage";
import { STR_KEYS } from "@common/storage";
import getDeviceInformation from "@common/utils/deviceInfo";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { newToken } from "src/store/auth/authSlice";
import { RootState } from "src/store";
import {
  CONFLICT,
  errorStatusArray,
  FETCH_ERROR,
  OS_TYPE,
  OS_VERSION,
  REFRESH_URL,
  selectToken,
  UNAUTHORIZED,
  VALIDATION_ERROR,
} from "./constants";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = selectToken(getState() as RootState);

    if (token !== null) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result.error.status === UNAUTHORIZED) {
    // Change the path accordingly
    if (result?.meta?.response?.statusText === "Token Expired") {
      // get device info
      const { uniqueId, brand, model, deviceId, deviceType } =
        await getDeviceInformation();
      // get fcm token
      const fcmToken = "Random FCM token";
      //construct body
      const body = {
        token: (api.getState() as RootState).authReducer.userToken,
        loginFor: "MOBILE",
        device: {
          deviceId: deviceId,
          osType: OS_TYPE,
          osVersion: OS_VERSION,
          deviceUniqueId: uniqueId,
          deviceBrand: brand,
          deviceModel: model,
          deviceType: deviceType,
          appVersion: "1.0",
          fcmToken: fcmToken || "",
        },
      };
      const refreshResult = await baseQuery(
        {
          url: REFRESH_URL,
          method: "POST",
          body,
        },
        api,
        extraOptions
      );
      if (refreshResult?.data) {
        // store the new token
        await AsyncStorage.setItem(STR_KEYS.USER_TOKEN, "New token");
        api.dispatch(newToken({ token: "New token" }));
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      }
    }
  } else if (result.error && result.error.status === FETCH_ERROR) {
    showToast("noNetwork");
  } else if (result.error && result?.error?.status === CONFLICT) {
    showToast("Conflict error");
  } else if (result.error && result?.error?.status === VALIDATION_ERROR) {
    showToast("Validation error");
  } else if (result.error) {
    if (errorStatusArray.includes("error")) {
      showToast("error");
    } else {
      showToast("Something went wrong.");
    }
  }
  return result;
};

export const CreateApi = createApi({
  reducerPath: "CreateApi",
  baseQuery: baseQueryWithRefreshAuth,
  endpoints: () => ({}),
  tagTypes: ["Post"],
});
