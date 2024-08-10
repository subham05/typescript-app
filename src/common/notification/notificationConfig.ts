// notificationConfig.ts

import notifee, { AndroidImportance } from "@notifee/react-native";

const initializeNotificationChannel = async () => {
  // Check if the channel already exists
  const existingChannel = await notifee.getChannel("default");

  if (!existingChannel) {
    // Create the channel if it doesn't exist
    await notifee.createChannel({
      id: "default",
      name: "Default Channel",
      vibration: true,
      importance: AndroidImportance.HIGH,
    });
  }
};

export { initializeNotificationChannel };
