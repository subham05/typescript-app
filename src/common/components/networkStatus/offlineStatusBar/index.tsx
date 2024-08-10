import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { _isIOS } from "@common/utils/platformCheck";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StatusBar } from "react-native";
import { Stack } from "react-native-flex-layout";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NetworkContext } from "src/navigation/networkProvider";
import { useStyles } from "./index.styles";

export const OfflineStatusBar = () => {
  const barHeight = useSharedValue(0);
  const { styles, theme } = useStyles({});
  const translate = useSharedValue(_isIOS ? -90 : -40);
  const firstRenderRef = useRef<boolean>(true);
  const { netStatus, prevNetStatus } = React.useContext(NetworkContext);
  const [statusBarColor, setStatusBarColor] = useState<string | undefined>(
    undefined
  );
  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translate.value }],
      height: barHeight.value,
      zIndex: 999,
    };
  });

  const netStateAnimationCallback = useCallback(() => {
    if (!firstRenderRef.current) {
      if (prevNetStatus === undefined && netStatus) {
        // NOTHING TO DO, THIS SITUATION IS FINE,  IF REQUIRED SOME TASKS CAN BE INCLUDED
      }
      if (prevNetStatus && !netStatus) {
        barHeight.value = withTiming(40);
        translate.value = withTiming(0);
        setStatusBarColor(theme.palette.decorative.tertiary_mustard);
      }
      if (!prevNetStatus && netStatus) {
        setStatusBarColor(theme.palette.decorative.quaternary_green);
        setTimeout(() => {
          barHeight.value = withTiming(0);
          translate.value = withTiming(_isIOS ? -90 : -40);
          setStatusBarColor(undefined);
        }, 2000);
      }
    } else {
      firstRenderRef.current = false;
    }
  }, [prevNetStatus, netStatus, barHeight, translate]);

  useEffect(netStateAnimationCallback, [netStateAnimationCallback]);

  const netStatusText = netStatus ? "Back Online" : "You are offline";
  //   const netStatusIcon = netStatus ? "online" : "offline";
  const netStatusColor = netStatus
    ? theme.palette.decorative.quaternary_green
    : theme.palette.decorative.tertiary_mustard;
  return (
    <>
      <StatusBar backgroundColor={statusBarColor} />
      <Animated.View style={boxStyle}>
        <Stack
          direction="row"
          center
          style={[styles.container, { backgroundColor: netStatusColor }]}
          spacing={10}
        >
          <IconView
            name={netStatus ? "checkmark_circle_02" : "help_circle"}
            size={15}
            color={
              netStatus
                ? theme.palette.background.section_bg
                : theme.palette.text.primary
            }
          />
          <TextView
            style={netStatus ? styles.onlineTextColor : styles.textColors}
          >
            {netStatusText}
          </TextView>
        </Stack>
      </Animated.View>
    </>
  );
};
