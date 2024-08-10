import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { Box } from "react-native-flex-layout";
import { IconView } from "../../Icon";
import { TextView } from "../../textView";
import { useStyles } from "./index.styles";
import { DropdownItemProps } from "./types";

interface FilterDropdownProps
  extends Omit<DropdownProps<DropdownItemProps>, "labelField" | "valueField"> {
  style?: StyleProp<ViewStyle>;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  style,
  ...props
}) => {
  const { styles } = useStyles({});

  return (
    <Dropdown
      mode="auto"
      style={[
        styles.dropdownView,
        props.value != undefined && styles.borderSelect,
        style,
      ]}
      renderLeftIcon={() => (
        <TextView
          numberOfLines={1}
          variant={props.value != undefined ? "medium" : "light"}
          style={styles.width}
        >
          {(props.value ? props.value : "Select") as ReactNode}
        </TextView>
      )}
      activeColor={"transparent"}
      containerStyle={styles.dropContainer}
      placeholderStyle={styles.filterTextSelect}
      selectedTextStyle={styles.filterText}
      renderRightIcon={() => <IconView name="arrow_down" size={18} />}
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
