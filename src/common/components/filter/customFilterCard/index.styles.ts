import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(() => {
  return {
    customList: {
      paddingHorizontal: 17,
      paddingVertical: 8,
    },
    customDropText: {
      fontSize: 14,
      paddingLeft: I18nManager.isRTL ? 0 : 6,
      paddingRight: I18nManager.isRTL ? 6 : 0,
      textAlign: "left",
    },
  };
});
