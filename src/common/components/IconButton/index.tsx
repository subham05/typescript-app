import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { IconView } from "../Icon";
import { IconSetEnum } from "../Icon/enums";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

type TouchableRippleIconButtonProps = {
  name: keyof typeof IconSetEnum;
  onPress?: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
  disabled?: boolean;
  isGroup?: boolean;
  batchSHow?: boolean;
};
export const IconButton: React.FC<TouchableRippleIconButtonProps> = ({
  name,
  size = 18,
  onPress,
  color,
  disabled,
  batchSHow = false,
  style,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      {batchSHow && <Box style={styles.batch} />}

      <IconView name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
