import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  topDate: {
    height: 81,
    width: 80,
    borderRadius: 18,
    backgroundColor: theme.palette.background.section_bg,
    position: "absolute",
    right: 40,
    overflow: "hidden",
    zIndex: 10,
  },
  month: {
    backgroundColor: theme.palette.decorative.primary_indigo,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 6,
  },
  dayText: {
    fontSize: 10,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  monthText: {
    color: theme.palette.cta.Filter_bg,
    fontSize: 14,
    textAlign: "center",
  },

  welcomeText: {
    color: theme.palette.background.section_bg,
    fontSize: 24,
    width: "50%",
    position: "absolute",
    left: 26,
    textAlign: "left",
    bottom: 50,
    lineHeight: 30,
  },
  welcomeTextName: {
    color: theme.palette.background.section_bg,
    fontSize: 24,
    width: "50%",
    position: "absolute",
    left: 26,
    bottom: 20,
    lineHeight: 30,
    textAlign: "left",
    maxWidth: "60%",
  },
  welcome: {
    height: 127,
    borderRadius: 32,
    marginTop: 36,
    zIndex: 9,
  },
  welcomeImg: {
    position: "absolute",
    right: 16,
    bottom: 0,
    height: 77,
    width: 104,
  },
  welcomeWave: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
}));
