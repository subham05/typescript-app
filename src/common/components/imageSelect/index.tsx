import { IconView } from "@common/components/Icon";
import { CommonModal } from "@common/components/modal";
import { TextView } from "@common/components/textView";
import {
  checkCameraPermission,
  getCameraPermission,
} from "@common/utils/permissions/ReadCamera";
import { AlertPermission } from "@common/utils/permissions/alert";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity } from "react-native";
import { HStack } from "react-native-flex-layout";
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { useStyles } from "./index.styles";

type ImageSelectProps = {
  isVisible: boolean;
  onClose: () => void;
  onImageSelected: (image: ImagePickerResponse) => void;
};

const ImageSelect: React.FC<ImageSelectProps> = ({
  isVisible,
  onClose,
  onImageSelected,
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const takePermissionCamera = (type: number) => {
    checkCameraPermission().then((res) => {
      const version = Number(Platform.Version);

      const handleAction = () => {
        type === 1 ? chooseFileCamera() : chooseFileGallery();
      };

      if (version >= 33 || res.isPermissionGranted) {
        handleAction();
      } else if (res.result === "denied") {
        getCameraPermission().then((resp) => {
          const { statuses, isPermissionGranted } = resp;
          if (
            statuses["ios.permission.CAMERA"] === "blocked" ||
            statuses["android.permission.CAMERA"] === "blocked"
          ) {
            AlertPermission(t("common:camera"));
          }
          if (isPermissionGranted) {
            chooseFileCamera();
          }
        });
      } else if (res.result === "blocked") {
        AlertPermission(t("common:camera"));
      }
    });
  };

  const chooseFileCamera = () => {
    const option: ImageLibraryOptions = { mediaType: "photo" };
    launchCamera(option, (item) => {
      if (item) onImageSelected(item);
    });
    onClose();
  };

  const chooseFileGallery = () => {
    const option: ImageLibraryOptions = { mediaType: "photo" };
    launchImageLibrary(option, (item) => {
      if (item) onImageSelected(item);
    });
    onClose();
  };

  return (
    <CommonModal
      isModalVisible={isVisible}
      style={styles.customModal}
      onPress={onClose}
    >
      <HStack spacing={16} p={20}>
        <TouchableOpacity
          onPress={() => takePermissionCamera(1)}
          style={styles.cta}
        >
          <IconView name="camera" />
          <TextView style={styles.ctaText}>Camera</TextView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => takePermissionCamera(2)}
          style={styles.cta}
        >
          <IconView name="media" />
          <TextView style={styles.ctaText}>Gallery</TextView>
        </TouchableOpacity>
      </HStack>
    </CommonModal>
  );
};

export default ImageSelect;
