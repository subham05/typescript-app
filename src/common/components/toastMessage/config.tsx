import React from "react";
import { Dimensions } from "react-native";
import { ToastShowParams, ToastConfigParams } from "react-native-toast-message";
import Success from "./components/toastSuccess";

const { width } = Dimensions.get("screen");
const toastWidth = width - 40;

export const toastConfig = {
  success: (toastProps: ToastConfigParams<ToastShowParams>) => {
    return toastProps?.isVisible ? (
      <Success toastProps={toastProps} toastWidth={toastWidth} />
    ) : null;
  },
};
