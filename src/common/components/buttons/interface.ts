import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconSetEnum } from "../Icon/enums";
type IconSetEnumValue = keyof typeof IconSetEnum;
type IconSetEnumWithoutPrefix = `${Extract<IconSetEnumValue, string>}`;
type IconSetEnumWithoutPrefixEnum = {
  [K in IconSetEnumValue as IconSetEnumWithoutPrefix]: IconSetEnumWithoutPrefix;
};
export interface buttonIconProps {
  name?: keyof IconSetEnumWithoutPrefixEnum;
  color?: string | undefined;
}
export interface ButtonCommonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress: () => void;
  iconProps?: buttonIconProps;
  width?: number | string | undefined;
  loading?: boolean;
  disabled?: boolean;
  height?: number | string | undefined;
  fontSize?: 22 | 18 | 16 | 14 | 12 | 52 | 28 | 42 | 10 | 20;
  iconPosition?: "left" | "right";
  alignButton?: boolean;
}
