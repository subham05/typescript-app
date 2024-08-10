import useScreenDimensions from "@common/utils/responsiveDimensions";
import React, { useCallback, useEffect } from "react";
import { Box } from "react-native-flex-layout";
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useStyles } from "./index.styles";
import TabButton from "./topTabButton";
import { I18nManager } from "react-native";
interface HeaderProps {
  onTabChange: (tab: number) => void;
  scroll?: SharedValue<number>;
  tabLeftName: string;
  tabRightName: string;
}
const Tab: React.FC<HeaderProps> = ({
  onTabChange,
  scroll,
  tabLeftName,
  tabRightName,
}) => {
  const { width } = useScreenDimensions();
  const adjustedPosition = I18nManager.isRTL ? -18 : 18;
  const adjustedPosition2 = I18nManager.isRTL ? -width / 2 : width / 2;
  const tabOffsetValue = useSharedValue(adjustedPosition);
  const { styles, theme } = useStyles({});
  let widthValue = 1;
  useEffect(() => {
    if (widthValue === 1) {
      handleTabPress(adjustedPosition, 1);
    } else {
      handleTabPress(adjustedPosition2, 2);
    }
  }, [width]);
  const handleTabPress = useCallback(
    (toValue: number, index: number) => {
      tabOffsetValue.value = withTiming(toValue, {
        duration: 50,
        easing: Easing.linear,
      });
      setTimeout(() => onTabChange(index), 100);
      widthValue = index;
    },
    [onTabChange]
  );

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: scroll?.value && scroll?.value > 50 ? 1 : 0,
      borderBottomColor:
        scroll?.value && scroll.value > 50
          ? theme.palette.border.Attachment_field
          : "transparent",
    };
  });
  const barAnimatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: tabOffsetValue.value }] };
  });

  return (
    <Animated.View style={[styles.default, headerAnimatedStyle]}>
      <Box ph={18} pv={10} style={styles.tabs}>
        <TabButton
          onPress={() => handleTabPress(adjustedPosition, 1)}
          text={tabLeftName}
        />
        <TabButton
          onPress={() => handleTabPress(adjustedPosition2, 2)}
          text={tabRightName}
        />
        <Animated.View style={[styles.bar, barAnimatedStyle]}></Animated.View>
      </Box>
    </Animated.View>
  );
};

export default React.memo(Tab);
