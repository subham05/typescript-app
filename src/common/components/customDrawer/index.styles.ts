import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(() => ({
  wave: {
    position: "absolute",
    right: -10,
    top: -10,
    zIndex: 999,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
}));
