import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { Tertiary_disaibled_searchbar_other },
      decorative: { primary_indigo },
    },
  } = theme;
  return {
    checkboxContain: {
      height: 17,
      width: 17,
      borderWidth: 1.6,
      borderColor: Tertiary_disaibled_searchbar_other,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    checked: {
      borderColor: primary_indigo,
    },
    checkMark: {
      backgroundColor: primary_indigo,
      height: 8,
      width: 8,
      borderRadius: 10,
    },
    radioContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 16,
      paddingLeft: I18nManager.isRTL ? 0 : 8,
      paddingRight: I18nManager.isRTL ? 8 : 0,
    },
  };
});
