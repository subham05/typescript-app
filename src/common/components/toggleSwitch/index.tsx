import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { HStack } from "react-native-flex-layout";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useStyles } from "./index.styles";
export type ToggleProps = {
  check?: boolean;
  onPress?: () => void;
  disable?: boolean;
};
const ToggleSwitch: React.FC<ToggleProps> = ({
  onPress,
  check = false,
  disable = false,
}) => {
  const { styles } = useStyles({});
  const togglePosition = useSharedValue(check ? 11 : 3);
  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      left: togglePosition.value,
    };
  });
  const handlePress = () => {
    if (!disable) {
      if (onPress) {
        onPress();
      }
      togglePosition.value = check
        ? withTiming(3, { duration: 200 })
        : withTiming(11, { duration: 200 });
    }
  };

  return (
    <HStack spacing={6}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.checkboxContain, check && styles.checked]}
      >
        <Animated.View
          style={[styles.round, check && styles.roundChecked, animatedBoxStyle]}
        />
      </TouchableOpacity>
      <TextView style={styles.textActive}>
        {check ? "Active" : "Inactive"}
      </TextView>
    </HStack>
  );
};

export default ToggleSwitch;
