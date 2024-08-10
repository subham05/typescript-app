import {
  check,
  RESULTS,
  requestMultiple,
  checkMultiple,
  Permission,
} from "react-native-permissions";

export const getMultiplePermissions = async (permissions: Permission[]) => {
  let isPermissionGranted = false;
  const statuses = await requestMultiple(permissions);
  for (const index in permissions) {
    if (
      statuses[permissions[index]] === RESULTS.GRANTED ||
      statuses[permissions[index]] === RESULTS.LIMITED
    ) {
      isPermissionGranted = true;
    } else {
      isPermissionGranted = false;
      break;
    }
  }

  return { isPermissionGranted, statuses };
};
export const checkPermission = async (permission: Permission) => {
  let isPermissionGranted = false;
  const result = await check(permission);
  switch (result) {
    case RESULTS.GRANTED:
      isPermissionGranted = true;
      break;
    case RESULTS.LIMITED:
      isPermissionGranted = true;
      break;
    case RESULTS.DENIED:
      isPermissionGranted = false;
      break;
    case RESULTS.BLOCKED:
      isPermissionGranted = false;
      break;
    case RESULTS.UNAVAILABLE:
      isPermissionGranted = false;
      break;
  }

  return { isPermissionGranted, result };
};

export const checkMultiplePermissions = async (permissions: Permission[]) => {
  const result = await checkMultiple([...permissions]);
  let isPermissionGranted = false;
  for (const index in permissions) {
    if (result[permissions[index]] === RESULTS.GRANTED) {
      isPermissionGranted = true;
    } else {
      isPermissionGranted = false;
      break;
    }
  }
  return { isPermissionGranted, result };
};
