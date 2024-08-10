import React from "react";
import { useStyles } from "./index.styles";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type StickyHeaderProps = {
  children: React.ReactNode;
  currentOffset: SharedValue<number>;
};

const StickyHeaderView: React.FC<StickyHeaderProps> = ({
  children,
  currentOffset,
}) => {
  const { styles } = useStyles({});

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: currentOffset.value }],
    };
  });

  return (
    <Animated.View style={[styles.stickyHeader, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default StickyHeaderView;
