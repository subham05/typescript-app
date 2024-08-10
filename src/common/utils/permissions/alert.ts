import { t } from "i18next";
import { Alert, Linking } from "react-native";

export const AlertPermission = (
  message: string,
  onCancel?: () => void,
  onOk?: () => void
) => {
  // const {t} = useTranslation();

  return Alert.alert("For Management", message, [
    {
      text: t("common:ok"),
      onPress: () => {
        Linking.openSettings();
        onOk?.();
      },
    },
    {
      text: t("common:cancel"),
      onPress: () => {
        onCancel?.();
      },
    },
  ]);
};
