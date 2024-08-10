import React, { memo } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import Modal from "react-native-modal";
import { IconView } from "../Icon";
import { TextView } from "../textView";
import { useStyles } from "./index.styles";

type ModalProps = {
  isModalVisible: boolean;
  onPress: () => void;
  title?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CommonModalComponent: React.FC<ModalProps> = ({
  isModalVisible,
  onPress,
  title,
  children,
  style,
}) => {
  const { styles } = useStyles({});

  return (
    <Modal
      avoidKeyboard={true}
      isVisible={isModalVisible}
      style={styles.modalContainer}
      hasBackdrop={true}
      backdropOpacity={0.1}
      onBackdropPress={onPress}
      useNativeDriverForBackdrop
    >
      <Box style={[styles.modalBg, style]}>
        <HStack style={styles.header}>
          <TextView variant="medium" style={styles.headingTitle}>
            {title}
          </TextView>
          <TouchableOpacity style={styles.close} onPress={onPress}>
            <IconView name="remove" size={24} />
          </TouchableOpacity>
        </HStack>
        {children}
      </Box>
    </Modal>
  );
};

export const CommonModal = memo(CommonModalComponent);
