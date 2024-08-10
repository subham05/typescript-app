import { TextView } from "@common/components/textView";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard, StyleProp, ViewStyle } from "react-native";
import { Box } from "react-native-flex-layout";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import SVGComponents from "src/assets/svg";
import { BackIconContainer } from "./components/backIcon";
import { MenuIconButton } from "./components/menuIcon";
import { useStyles } from "./index.styles";
import { _isIOS } from "@common/utils/platformCheck";

type headerProps = {
  title?: string;
  hideTitle?: boolean;
  navigationType?: "DRAWER" | "STACK";
  onBackPress?: () => void;
  preventDefault?: boolean | undefined;
  RenderMainContainer?: React.FC;
  RenderRightContainer?: React.FC;
  scroll?: SharedValue<number>;
  RenderBottomContainer?: React.FC;
  style?: StyleProp<ViewStyle>;
};

const Header: React.FC<headerProps> = ({
  title,
  hideTitle = false,
  navigationType = "STACK",
  onBackPress,
  preventDefault,
  RenderMainContainer,
  RenderRightContainer,
  scroll,
  style,
}) => {
  const { styles, theme } = useStyles({});
  const navigation = useNavigation();

  const onPressMenu = () => {
    Keyboard.dismiss();
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const onPressBack = () => {
    if (preventDefault) {
      onBackPress?.();
    } else {
      navigation.goBack();
    }
  };

  const LeftButtonContainer: React.FC = () => {
    switch (navigationType) {
      case "DRAWER":
        return <MenuIconButton onPress={onPressMenu} />;
      default:
        return <BackIconContainer onPress={onPressBack} />;
    }
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: scroll?.value && scroll?.value > 10 ? 1 : 0,
      borderBottomColor:
        scroll?.value && scroll.value > 10
          ? theme.palette.border.Attachment_field
          : "transparent",
    };
  });
  return (
    <Animated.View style={[styles.default, headerAnimatedStyle, style]}>
      <Box pl={10} pr={20} pt={_isIOS ? 0 : 15} pb={15} style={styles.head}>
        <Box style={styles.innerBox}>
          <LeftButtonContainer />
          {RenderMainContainer ? (
            <RenderMainContainer />
          ) : !hideTitle ? (
            <TextView style={styles.headText} variant="medium">
              {title}
            </TextView>
          ) : null}
        </Box>
        {RenderRightContainer && <RenderRightContainer />}
        <SVGComponents.Wave style={styles.waves} />
      </Box>
    </Animated.View>
  );
};

export default Header;
