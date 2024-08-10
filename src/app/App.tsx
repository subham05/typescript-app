/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Position } from "@common/components/toastMessage";
import { toastConfig } from "@common/components/toastMessage/config";
import NotificationWrapper from "@common/notification/wrapper";
import "@common/translation/localization";
import crashlytics from "@react-native-firebase/crashlytics";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import Router from "src/navigation/router";
import { store } from "src/store";

function App(): React.JSX.Element {
  useEffect(() => {
    crashlytics().log("App mounted.");
  }, []);

  return (
    <Provider store={store}>
      <NotificationWrapper>
        <Router />
      </NotificationWrapper>
      <Toast config={toastConfig} position={Position.Bottom} />
    </Provider>
  );
}

export default App;
