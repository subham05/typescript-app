import React, { useState } from "react";
import { KeyboardTypeOptions, TextInput, TextInputProps } from "react-native";
import { useStyles } from "./index.styles";
import { TextView } from "../textView";
import { HStack } from "react-native-flex-layout";

type FocusTextInputProps = TextInputProps & {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  autoComplete?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  isError?: boolean;
  RenderRightContainer?: React.FC | undefined;
  ErrorText?: string;
};

const TextField: React.FC<FocusTextInputProps> = ({
  label,
  placeholder,
  isPassword = false,
  keyboardType,
  RenderRightContainer,
  isError,
  ErrorText,
  ...props
}) => {
  const { styles, theme } = useStyles({});
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <TextView style={styles.textStyle}>{label}</TextView>
      <HStack
        style={[
          styles.textFieldWrap,
          isFocused && styles.focusedInput,
          isError && styles.errorInput,
        ]}
      >
        <TextInput
          {...props}
          placeholder={placeholder}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={
            theme.palette.text.Tertiary_disaibled_searchbar_other
          }
          secureTextEntry={isPassword}
          selectionColor={theme.palette.decorative.primary_indigo}
          keyboardType={keyboardType}
        />

        {RenderRightContainer && <RenderRightContainer />}
      </HStack>
      {isError && <TextView style={styles.errorText}>{ErrorText}</TextView>}
    </>
  );
};

export default TextField;
