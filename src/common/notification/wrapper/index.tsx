/* eslint-disable react/prop-types */
import React, { useEffect, ReactNode, useCallback } from "react";
import notifee, { EventType, AuthorizationStatus } from "@notifee/react-native";
import messaging from "@react-native-firebase/messaging";
import { initializeNotificationChannel } from "../notificationConfig";
import { channelID } from "../constants";
import { useTranslation } from "react-i18next";

type NotificationMessage = {
  notification?: {
    title?: string;
    body?: string;
  };
};
type childProp = {
  children: ReactNode;
};
const NotificationWrapper = ({ children }: childProp) => {
  const { t } = useTranslation();
  const getFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      /* empty */
    }
  };
  const checkPermission = useCallback(async () => {
    const enabled = await requestPermission();
    if (enabled) {
      getFCMToken();
    }
  }, []);

  useEffect(() => {
    checkPermission();
    initializeNotificationChannel();
  }, []);

  const requestPermission = async () => {
    const settings = await notifee.requestPermission();
    switch (settings.authorizationStatus) {
      case AuthorizationStatus.DENIED:
      case AuthorizationStatus.PROVISIONAL:
        return false;
      case AuthorizationStatus.AUTHORIZED:
        return true;
      default:
        return false;
    }
  };
  const onMessageReceived = async (message?: NotificationMessage) => {
    try {
      await notifee.displayNotification({
        title: message?.notification?.title || t("common:notificationTitle"),
        body: message?.notification?.body || t("common:notificationBody"),
        android: {
          channelId: channelID.default,
        },
      });
    } catch (e) {
      /* empty */
    }
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(onMessageReceived);
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribeForeground = notifee.onForegroundEvent(
      async ({ type, detail }) => {
        switch (type) {
          case EventType.DISMISSED:
            console.log("User dismissed notification", detail.notification);
            break;
          case EventType.PRESS:
            console.log("User pressed notification", detail.notification);
            break;
        }
      }
    );
    return () => {
      unsubscribeForeground();
    };
  }, []);

  return <>{children}</>;
};

export default NotificationWrapper;
