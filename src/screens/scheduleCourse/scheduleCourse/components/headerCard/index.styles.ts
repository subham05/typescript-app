import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { Tertiary_disaibled_searchbar_other, secondary },
      decorative: { primary_indigo },
      background: { section_bg },
    },
  } = theme;
  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 12,
      padding: 16,
      marginBottom: 14,
    },
    head: {
      color: primary_indigo,
      paddingLeft: I18nManager.isRTL ? 0 : 11,
      paddingRight: I18nManager.isRTL ? 11 : 0,
    },
    subtitle: {
      color: secondary,
      marginBottom: 5,
      textAlign: "left",
    },
    radioHeading: {
      color: Tertiary_disaibled_searchbar_other,
      textAlign: "left",
    },
    radioSpace: {
      columnGap: 37,
    },
    adjust: {
      textAlign: "left",
    },
    iconAdjust: { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] },
  };
});
