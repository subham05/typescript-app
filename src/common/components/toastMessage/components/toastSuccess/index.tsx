import React from "react";
import { View } from "react-native";
import { ToastShowParams } from "react-native-toast-message";

import { TextView } from "@common/components/textView";
import { useStyles } from "./index.styles";
interface successModal {
  toastWidth: number;
  toastProps: ToastShowParams;
}
const Success: React.FC<successModal> = ({ toastWidth, toastProps }) => {
  const { styles } = useStyles({});
  return (
    <View style={[styles.toastContainer, { width: toastWidth }]}>
      <TextView variant="regular" style={styles.toastText}>
        {toastProps.text1}
      </TextView>
    </View>
  );
};
export default Success;
