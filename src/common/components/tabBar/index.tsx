import TabIcon from "@common/components/tabBar/tabBarIcon";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  LayoutChangeEvent,
  TouchableOpacity,
  View,
  I18nManager,
} from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TextView } from "../textView";
import { useStyles } from "./index.styles";
type CustomProps = {
  dynamicWidthRef: React.RefObject<TouchableOpacity>;
};

const MyTabBar: React.FC<BottomTabBarProps & CustomProps> = ({
  state,
  descriptors,
  navigation,
  dynamicWidthRef,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const animatedViewRef = useRef<View>(null);
  const offset = useSharedValue(20);

  const handleLayout = (event: LayoutChangeEvent, isFocused: boolean) => {
    const { x, width } = event.nativeEvent.layout;
    const adjustedX = I18nManager.isRTL ? x - 2 : x + 2;
    if (isFocused && dynamicWidthRef.current) {
      offset.value = withTiming(adjustedX, {
        duration: 200,
        easing: Easing.linear,
      });
    }
    if (width > 50 && dynamicWidthRef.current) {
      animatedViewRef?.current?.setNativeProps({ style: { width } });
    }
  };

  return (
    <View style={styles.tabBackground}>
      <Animated.View
        ref={animatedViewRef}
        style={[
          styles.animatedStyle,
          I18nManager.isRTL ? { right: offset } : { left: offset },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconActive = isFocused
          ? theme.palette.icon.Active_bottomnavbar
          : theme.palette.icon.Disabled_bottomnavbar;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            ref={index === 0 ? dynamicWidthRef : null}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconContainer}
            onLayout={(event) => handleLayout(event, isFocused)}
          >
            <View style={styles.iconStyle}>
              <TabIcon
                label={label}
                isFocused={isFocused}
                iconActive={iconActive}
              />
            </View>
            {isFocused && (
              <TextView style={styles.iconText} variant="regular">
                {t(`bottomTab:${label}`) as string}
              </TextView>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
