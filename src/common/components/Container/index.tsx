import { STR_KEYS } from "@common/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Netinfo from "@react-native-community/netinfo";
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import { AuthContext } from "src/navigation/provider";
import { NetworkStatusView } from "../networkStatus/networkStatusView";
import { OfflineStatusBar } from "../networkStatus/offlineStatusBar";
import { useStyles } from "./index.styles";

interface ContainerProps {
  onRetry?: () => void;
  children: React.ReactNode;
  noSpacing?: boolean;
  onPress?: () => void;
  statusBarColor?: string;
  statusBarTheme?: StatusBarStyle;
  customBg?: StyleProp<ViewStyle>;
}

export const Container: React.FC<ContainerProps> = ({
  onRetry,
  children,
  noSpacing,
  onPress,
  statusBarColor,
  statusBarTheme,
  customBg,
}) => {
  const { styles, theme } = useStyles({});
  const { signOut } = useContext(AuthContext);

  const [networkState, setNetworkState] = useState<boolean | undefined>(true);

  const [token, setToken] = useState<string | null>();

  AsyncStorage.getItem(STR_KEYS.USER_TOKEN).then((res) => setToken(res));

  useEffect(() => {
    if (token === null) {
      signOut();
    }
  }, [signOut, token]);

  useEffect(() => {
    Netinfo.fetch().then((state) => {
      setNetworkState(state.isConnected!);
    });
  }, []);

  const onSuccessRetry = () => {
    setNetworkState(true);
    onRetry?.();
  };

  const spacingStyle = noSpacing ? undefined : styles.spacingHorizontal;
  return (
    <>
      <StatusBar
        backgroundColor={
          statusBarColor
            ? statusBarColor
            : theme.palette.background.main_screen_bg
        }
        barStyle={statusBarTheme ? statusBarTheme : "dark-content"}
      />
      <SafeAreaView style={[styles.container, spacingStyle, customBg]}>
        <>
          {networkState ? (
            <>
              <OfflineStatusBar />
              {children}
            </>
          ) : (
            <NetworkStatusView onRetry={onSuccessRetry} onPress={onPress} />
          )}
        </>
      </SafeAreaView>
    </>
  );
};
