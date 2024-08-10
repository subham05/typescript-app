import React from "react";
import { themeStyles } from "@common/theme";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import fontelloConfig from "../../../assets/fonts/selection.json";
import { IconSetEnum } from "./enums";

export const Icon = createIconSetFromIcoMoon(fontelloConfig);
type IconSetEnumValue = keyof typeof IconSetEnum;
type IconSetEnumWithoutPrefix = `${Extract<IconSetEnumValue, string>}`;
type IconSetEnumWithoutPrefixEnum = {
  [K in IconSetEnumValue as IconSetEnumWithoutPrefix]: IconSetEnumWithoutPrefix;
};

interface IconViewProps {
  name: keyof IconSetEnumWithoutPrefixEnum;
  size?: number;
  color?: string;
}
const { palette } = themeStyles.useTheme();
export const IconView: React.FC<IconViewProps> = ({ name, size, color }) => {
  return (
    <>
      <Icon
        name={name ? IconSetEnum[name] : IconSetEnum["Add"]}
        size={size ? size : 20}
        color={color ? color : palette.icon.Default}
      />
    </>
  );
};
