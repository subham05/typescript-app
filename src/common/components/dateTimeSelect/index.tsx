import { formatMoment, formatTime } from "@common/utils/dateFormat";
import React, { useState } from "react";
import {
  StyleProp,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { HStack } from "react-native-flex-layout";

import { useStyles } from "./index.styles";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { IconView } from "../Icon";
import { TextView } from "../textView";

type FocusTextInputProps = TextInputProps & {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  ErrorText?: string;
  date?: Date;
  mode?: "DATE" | "TIME";
  onDateChange: (date: Date) => void;
  customStyleTime?: StyleProp<ViewStyle>;
  customStyleText?: StyleProp<ViewStyle>;
};

const DataSelect: React.FC<FocusTextInputProps> = ({
  label,
  isError,
  ErrorText,
  date = new Date(),
  onDateChange,
  mode = "DATE",
  customStyleTime,
  customStyleText,
}) => {
  const { styles } = useStyles({});
  const [open, setOpen] = useState(false);
  const DateSelected = mode === "DATE" ? formatMoment(date) : formatTime(date);
  const handleDateChange = (date: Date) => {
    onDateChange(date);
  };
  return (
    <>
      {mode === "DATE" ? (
        <>
          <TextView style={styles.textStyle}>{label}</TextView>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <HStack
              style={[styles.textFieldWrap, isError && styles.errorInput]}
            >
              <TextView style={styles.dateText}>{DateSelected}</TextView>
              <IconView name="calendar" size={24} />
            </HStack>
          </TouchableOpacity>

          {isError && <TextView style={styles.errorText}>{ErrorText}</TextView>}
        </>
      ) : (
        <PrimaryButton
          width={105}
          styleText={[styles.btnText, customStyleText]}
          title={DateSelected}
          style={[styles.btnTime, customStyleTime]}
          onPress={() => setOpen(true)}
        />
      )}

      <DatePicker
        modal
        mode={mode === "DATE" ? "date" : "time"}
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          handleDateChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DataSelect;
