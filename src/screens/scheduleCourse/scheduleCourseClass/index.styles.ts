import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      cta: { Filter_border },
      text: { primary, Tertiary_disaibled_searchbar_other },
      decorative: { secondary_blush },
    },
  } = theme;

  return {
    contain: {
      paddingHorizontal: 20,
      paddingBottom: 160,
    },

    fixed: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: section_bg,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 67,
      shadowColor: primary,
      zIndex: 9,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 10,
    },
    secondaryBtn: {
      height: 40,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    primaryBtn: {
      height: 40,
      backgroundColor: Filter_border,
      borderRadius: 12,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    secondaryTxt: {
      color: Filter_border,
    },
    primaryTxt: {
      color: section_bg,
    },
    dash: {
      height: 2,
      width: 6,
      backgroundColor: primary,
      alignSelf: "center",
    },
    timeSelect: {
      columnGap: 14,
    },
    heading: {
      fontSize: 16,
      color: Tertiary_disaibled_searchbar_other,
      textAlign: "left",
    },
    keyBoardContainer: {
      flexGrow: 1,
    },
    customBg: {
      flexGrow: 1,
      backgroundColor: section_bg,
    },
    customHeader: {
      backgroundColor: section_bg,
    },
    note: {
      fontSize: 12,
      color: secondary_blush,
      paddingLeft: I18nManager.isRTL ? 0 : 4,
      paddingRight: I18nManager.isRTL ? 4 : 4,
    },
    customTime: {
      backgroundColor: Filter_border,
    },
    customTimeText: { color: section_bg },
  };
});
