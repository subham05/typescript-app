import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { Box, HStack } from "react-native-flex-layout";
import { IconView } from "../Icon";
import { TextView } from "../textView";
import { useStyles } from "./index.styles";
import { DropdownItemProps } from "./types";
import { I18nManager } from "react-native";

type FocusTextInputProps = {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  ErrorText?: string;
} & Omit<DropdownProps<DropdownItemProps>, "labelField" | "valueField">;

const SelectInputDropdown: React.FC<FocusTextInputProps> = ({
  label,
  placeholder,
  isError,
  ErrorText,

  ...props
}) => {
  const { styles } = useStyles({});

  const renderItem = (item: DropdownItemProps) => {
    return (
      <Box style={styles.item}>
        <TextView style={styles.selectedTextStyle}>{item.label}</TextView>
      </Box>
    );
  };

  return (
    <>
      <TextView style={styles.textStyle}>{label}</TextView>
      <HStack style={[styles.textFieldWrap, isError && styles.errorInput]}>
        <Box style={styles.full}>
          <Dropdown
            mode="auto"
            containerStyle={styles.contain}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            searchPlaceholder={placeholder}
            renderLeftIcon={() =>
              I18nManager.isRTL ? (
                <IconView name="arrow_down" size={24} />
              ) : null
            }
            renderRightIcon={() =>
              I18nManager.isRTL ? null : (
                <IconView name="arrow_down" size={24} />
              )
            }
            renderItem={renderItem}
            {...props}
          />
        </Box>
      </HStack>
      {isError && <TextView style={styles.errorText}>{ErrorText}</TextView>}
    </>
  );
};

export default SelectInputDropdown;
