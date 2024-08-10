import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(() => ({
  rippleButton: {
    padding: 10,
    borderRadius: 10,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
}));
