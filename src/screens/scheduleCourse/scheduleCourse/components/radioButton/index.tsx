import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type RadioProps = {
  check?: boolean;
  onPress?: () => void;
  name?: string;
};
const RadioButton: React.FC<RadioProps> = ({
  onPress,
  check = false,
  name,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Box style={styles.radioContainer}>
        <Box style={[styles.checkboxContain, check && styles.checked]}>
          {check && <Box style={styles.checkMark} />}
        </Box>
        <TextView variant="medium" style={styles.text}>
          {name}
        </TextView>
      </Box>
    </TouchableNativeFeedback>
  );
};

export default RadioButton;
