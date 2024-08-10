import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { primary, secondary },
      cta: { Primary_default },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    infoBox: {
      paddingLeft: 16,
      width: "70%",
    },
    subject: {
      fontSize: 16,
      color: primary,
      textAlign: "left",
    },
    session: {
      fontSize: 12,
      color: secondary,
      paddingBottom: 8,
      textAlign: "left",
    },
    date: {
      color: secondary,
      fontSize: 12,
      textAlign: "left",
    },
    ctaBtn: {
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: Primary_default,
    },
    ctaText: {
      color: section_bg,
      fontSize: 12,
    },
    statusText: {
      fontSize: 12,
      textAlign: "right",
    },
    img: {
      height: 78,
      width: 53,

      borderRadius: 14,
    },
    leftSide: {
      alignItems: "center",
      width: "75%",
    },
    joinContainer: {
      width: "25%",
    },
    titleContainer: { alignItems: "center", paddingBottom: 5 },
    tag: {
      color: secondary,
      fontSize: 12,
      paddingLeft: I18nManager.isRTL ? 0 : 10,
      paddingRight: I18nManager.isRTL ? 10 : 0,
    },
    numbSession: { color: primary },
  };
});
