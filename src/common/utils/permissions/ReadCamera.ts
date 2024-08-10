import { PERMISSIONS } from "react-native-permissions";
import { _isIOS } from "../platformCheck";
import { checkPermission, getMultiplePermissions } from "./common";

const cameraPermission = _isIOS
  ? PERMISSIONS.IOS.CAMERA
  : PERMISSIONS.ANDROID.CAMERA;

export const checkCameraPermission = async () => {
  const { isPermissionGranted, result } = await checkPermission(
    cameraPermission
  );
  return { isPermissionGranted, result };
};

export const getCameraPermission = async () => {
  const { isPermissionGranted, statuses } = await getMultiplePermissions([
    cameraPermission,
  ]);

  return { isPermissionGranted, statuses };
};
