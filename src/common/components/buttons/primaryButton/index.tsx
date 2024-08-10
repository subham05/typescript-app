import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { _isIOS } from "@common/utils/platformCheck";
import React from "react";
import {
  ActivityIndicator,
  DimensionValue,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { HStack } from "react-native-flex-layout";
import Ripple from "react-native-material-ripple";
import { ButtonCommonProps } from "../interface";
import { useStyles } from "./index.styles";

type PrimaryButtonProps = ButtonCommonProps;

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  style,
  styleText,
  onPress,
  iconProps,
  width,
  title,
  loading,
  disabled,
  fontSize = 16,
  height = 40,
  alignButton = false,
}) => {
  const { styles, theme } = useStyles({});
  const isDisabled = disabled || loading;
  const color = iconProps?.color
    ? iconProps?.color
    : theme.palette.background.main_screen_bg;

  const buttonStyles: StyleProp<ViewStyle> = {
    backgroundColor: isDisabled
      ? theme.palette.cta.Primary_disabled
      : theme.palette.cta.Primary_default,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    height: height as DimensionValue | undefined,
    width: width as DimensionValue | undefined,
    marginBottom: _isIOS && !alignButton ? -80 : undefined,
  };
  const buttonTextStyles: StyleProp<TextStyle> = {
    color,
    fontSize: 14,
  };

  return (
    <Ripple
      disabled={isDisabled}
      rippleColor={"white"}
      removeClippedSubviews={!_isIOS}
      onPress={onPress}
      style={[buttonStyles, style]}
    >
      <HStack>
        {iconProps?.name && !loading && (
          <IconView size={fontSize} name={iconProps?.name} color={color} />
        )}
        <>{loading && <ActivityIndicator color={color} />}</>
        {loading || (iconProps?.name && <View style={styles.spacing} />)}
        <TextView variant="medium" style={[buttonTextStyles, styleText]}>
          {title}
        </TextView>
      </HStack>
    </Ripple>
  );
};
