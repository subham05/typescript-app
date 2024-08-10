import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";

type TabButtonProps = {
  onPress: () => void;
  text: string;
};

const TabButton: React.FC<TabButtonProps> = ({ onPress, text }) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabBtn}>
      <TextView style={styles.tabText}>{text}</TextView>
    </TouchableOpacity>
  );
};

export default TabButton;
