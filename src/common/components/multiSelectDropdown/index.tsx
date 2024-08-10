import React from "react";
import { I18nManager, TextInputProps, TouchableOpacity } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { MultiSelectProps } from "react-native-element-dropdown/lib/typescript/components/MultiSelect/model";
import { Box, HStack } from "react-native-flex-layout";
import { IconView } from "../Icon";
import { TextView } from "../textView";
import { useStyles } from "./index.styles";
type FocusTextInputProps = TextInputProps & {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  ErrorText?: string;
  value?: string[];
  data?: DropdownItem[];
  length?: number;
} & Omit<MultiSelectProps<DropdownItem>, "labelField" | "valueField">;

type DropdownItem = {
  label: string;
  value: string;
};
const MultiSelectDropdown: React.FC<FocusTextInputProps> = ({
  label,
  placeholder,
  isError,
  ErrorText,
  length = 0,
  data = [],
  ...props
}) => {
  const { styles } = useStyles({});

  const renderItem = (item: { label: string }) => {
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
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={[
              styles.placeholderStyle,
              length > 0 && styles.hidden,
            ]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={data}
            placeholder={placeholder}
            searchPlaceholder={placeholder}
            renderItem={renderItem}
            labelField="label"
            valueField="value"
            inside
            maxHeight={300}
            containerStyle={styles.contain}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity
                style={styles.selectedStyle}
                onPress={() => unSelect && unSelect(item)}
              >
                <TextView style={styles.textSelectedStyle}>
                  {item.label}
                </TextView>
                <IconView name="remove" />
              </TouchableOpacity>
            )}
            renderRightIcon={() =>
              I18nManager.isRTL ? null : (
                <IconView name="arrow_down" size={24} />
              )
            }
            renderLeftIcon={() =>
              I18nManager.isRTL ? (
                <IconView name="arrow_down" size={24} />
              ) : null
            }
            selectedStyle={styles.selectedStyleItem}
            {...props}
          />
        </Box>
      </HStack>
      {isError && <TextView style={styles.errorText}>{ErrorText}</TextView>}
    </>
  );
};

export default MultiSelectDropdown;
