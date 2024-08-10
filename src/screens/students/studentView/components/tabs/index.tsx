import useScreenDimensions from "@common/utils/responsiveDimensions";
import React, { useEffect } from "react";
import { Box } from "react-native-flex-layout";
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useStyles } from "./index.styles";
import TabButton from "./topTabButton";
import { I18nManager } from "react-native";
interface HeaderProps {
  onTabChange: (tab: number) => void;
  scroll?: SharedValue<number>;
  tabLeftName: string;
  tabMiddleName: string;
  tabRightName: string;
}
const Tab: React.FC<HeaderProps> = ({
  onTabChange,
  scroll,
  tabLeftName,
  tabRightName,
  tabMiddleName,
}) => {
  const tabOffsetValue = useSharedValue(18);

  const { width } = useScreenDimensions();
  const adjustedPosition = I18nManager.isRTL ? -18 : 18;
  const adjustedPosition2 = I18nManager.isRTL
    ? (-width - 9) / 3
    : (width + 9) / 3;
  const adjustedPosition3 = I18nManager.isRTL
    ? ((-width + 9) * 2) / 3
    : ((width - 9) * 2) / 3;
  const { styles, theme } = useStyles({});
  let widthValue = 1;
  useEffect(() => {
    if (widthValue === 1) {
      handleTabPress(adjustedPosition, 1);
    } else if (widthValue === 2) {
      handleTabPress(adjustedPosition2, 2);
    } else {
      handleTabPress(adjustedPosition3, 3);
    }
  }, [width]);
  const handleTabPress = (toValue: number, index: number) => {
    tabOffsetValue.value = withDelay(
      100,
      withTiming(toValue, { duration: 200, easing: Easing.linear })
    );
    onTabChange(index);
    widthValue = index;
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: scroll?.value && scroll?.value > 60 ? 1 : 0,
      borderBottomColor:
        scroll?.value && scroll.value > 60
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
          text={tabMiddleName}
        />
        <TabButton
          onPress={() => handleTabPress(adjustedPosition3, 3)}
          text={tabRightName}
        />
        <Animated.View style={[styles.bar, barAnimatedStyle]}></Animated.View>
      </Box>
    </Animated.View>
  );
};

export default Tab;
