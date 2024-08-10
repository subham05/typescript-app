import { IconView } from "@common/components/Icon";
import React from "react";
import Ripple from "react-native-material-ripple";
import { useStyles } from "./index.styles";
type MenuIconButtonProps = {
  onPress: () => void;
};
export const MenuIconButton: React.FC<MenuIconButtonProps> = ({ onPress }) => {
  const { styles } = useStyles({});
  return (
    <Ripple
      rippleContainerBorderRadius={20}
      style={styles.rippleButton}
      onPress={onPress}
    >
      <IconView size={24} name="menu" />
    </Ripple>
  );
};
