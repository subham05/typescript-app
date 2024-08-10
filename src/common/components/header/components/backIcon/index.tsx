import { IconView } from "@common/components/Icon";
import React from "react";
import Ripple from "react-native-material-ripple";
import { useStyles } from "./index.styles";
type BackIconContainerProps = {
  onPress: () => void;
};
export const BackIconContainer: React.FC<BackIconContainerProps> = ({
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <Ripple
      rippleContainerBorderRadius={20}
      style={styles.rippleButton}
      onPress={onPress}
    >
      <IconView name="arrow_left" size={24} />
    </Ripple>
  );
};
