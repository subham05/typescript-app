/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @format
 */

import notifee, { EventType } from "@notifee/react-native";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/app/App";
import messaging from "@react-native-firebase/messaging";
import { API_MOCKING } from "@env";
const onMessageReceived = async (message) => {
  try {
    await notifee.displayNotification({
      title: message.notification?.title || "Notification Title",
      body: message.notification?.body || "Notification Body",
    });
  } catch (e) {
    /* empty */
  }
};
messaging().setBackgroundMessageHandler(onMessageReceived);

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification } = detail;
  if (type === EventType.PRESS) {
    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});
// if (__DEV__) {
//   require("./msw.polyfills");

//   const { server } = require("./src/mocks/server");
//   server.listen();
// }
if (API_MOCKING === "enabled") {
  require("./msw.polyfills");

  require("./src/mocks");
}
AppRegistry.registerComponent(appName, () => App);
