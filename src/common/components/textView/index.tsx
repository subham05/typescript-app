import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { FontFamilyEnum } from "./enum";
import { themeStyles } from "@common/theme";

type FontFamilyValue = keyof typeof FontFamilyEnum;
type FontFamilyWithoutPrefix = `${Extract<FontFamilyValue, string>}`;
type FontFamilyWithoutPrefixEnum = {
  [K in FontFamilyValue as FontFamilyWithoutPrefix]: FontFamilyWithoutPrefix;
};

export type TextViewProps = TextProps & {
  variant?: keyof FontFamilyWithoutPrefixEnum;
  isUpperCase?: boolean;
};

export const TextView: React.FC<TextViewProps> = ({
  style,
  children,
  isUpperCase,
  variant,
  ...props
}) => {
  const { palette } = themeStyles.useTheme();
  const textStyles: StyleProp<TextStyle> = [
    { color: palette.text.primary },
    style ? style : {},
    { fontFamily: variant ? FontFamilyEnum[variant] : FontFamilyEnum.regular },
  ];

  const renderedText =
    typeof children === "string" && isUpperCase
      ? children.toUpperCase()
      : children;

  // RETURN
  return (
    <Text {...props} style={textStyles}>
      {renderedText}
    </Text>
  );
};
