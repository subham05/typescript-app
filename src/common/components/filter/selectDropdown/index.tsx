import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { Box } from "react-native-flex-layout";
import { IconView } from "../../Icon";
import { TextView } from "../../textView";
import { useStyles } from "./index.styles";
import { DropdownItemProps } from "./types";

interface SelectDropdownProps
  extends Omit<DropdownProps<DropdownItemProps>, "labelField" | "valueField"> {
  style?: StyleProp<ViewStyle>;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  style,
  ...props
}) => {
  const { styles, theme } = useStyles({});

  return (
    <Dropdown
      mode="auto"
      style={[styles.dropdownView, style]}
      activeColor={"transparent"}
      containerStyle={styles.dropContainer}
      placeholderStyle={styles.filterTextSelect}
      selectedTextStyle={styles.filterText}
      renderRightIcon={() => (
        <IconView
          name="More"
          color={theme.palette.background.section_bg}
          size={24}
        />
      )}
      renderItem={(item: DropdownItemProps) => (
        <Box pv={5}>
          <TextView>{item.label}</TextView>
        </Box>
      )}
      labelField="label"
      valueField="value"
      {...props}
    />
  );
};
