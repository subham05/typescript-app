import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";
export type CheckBoxProps = {
  check?: boolean;
  onPress?: () => void;
};
const CheckBox: React.FC<CheckBoxProps> = ({ onPress, check = false }) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.checkboxContain, check && styles.checked]}
    >
      {check && (
        <TextView style={styles.checkMark} variant="bold">
          ✓
        </TextView>
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
