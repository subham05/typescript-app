import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      cta: { Filter_border },
      text: { primary, secondary },
    },
  } = theme;

  return {
    container: {
      flex: 1,
      backgroundColor: main_screen_bg,
    },
    contain: {
      paddingHorizontal: 20,
      paddingBottom: 70,
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
      shadowColor: main_screen_bg,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
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
    thumbBox: {
      backgroundColor: section_bg,
      height: 24,
      width: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: primary,
      justifyContent: "center",
      alignItems: "center",
    },
    textThumb: {
      fontSize: 14,
      textAlign: "center",
    },
    barStyle: { borderRadius: 20 },
    profileImage: { borderRadius: 16, height: 80, width: 80 },
    name: {
      fontSize: 18,
      marginBottom: 3,
      textAlign: "left",
    },
    marks: { backgroundColor: "transparent" },
    textSlide: {
      width: 15,
      fontSize: 18,
      marginBottom: 10,
      backgroundColor: main_screen_bg,
    },
    ratingText: {
      marginTop: 45,
      fontSize: 16,
      color: secondary,
      marginBottom: 18,
      textAlign: "left",
    },
    numberRate: {
      fontSize: 18,
    },
    textArea: {
      padding: 0,
      color: primary,
      fontSize: 16,
      textAlign: I18nManager.isRTL ? "right" : "left",
    },
    date: {
      marginTop: 8,
      fontSize: 12,
      textAlign: "left",
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 20,
      textAlign: "left",
    },
    subject: {
      textAlign: "left",
    },
    trackStyle: {
      backgroundColor: Filter_border,
      height: 16,
      borderRadius: 10,
    },
    align: {
      textAlign: "left",
    },
  };
});
