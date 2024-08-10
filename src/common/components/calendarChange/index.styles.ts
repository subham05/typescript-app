import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(() => {
  return {
    calendarChange: {
      flexDirection: "row",
      alignItems: "center",
      height: 34,
    },
    calendarDate: {
      fontSize: 16,
    },
    adjust: { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] },
  };
});
