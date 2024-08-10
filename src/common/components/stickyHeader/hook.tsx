import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

const UseScrollAnimation = (height = 112) => {
  const scrollY = useSharedValue(0);
  const translateY = useSharedValue(0);
  let lastScrollPos = 0;

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { y: number } };
  }) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const scrollDirection = currentOffset > lastScrollPos ? "down" : "up";
    lastScrollPos = currentOffset;

    if (scrollDirection === "up") {
      translateY.value = withTiming(0, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    } else if (currentOffset > 120) {
      translateY.value = withTiming(-height, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      });
    }

    scrollY.value = Math.abs(currentOffset);
  };

  return { scrollY, translateY, handleScroll };
};

export default UseScrollAnimation;
