import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.main_screen_bg,
  },
  contain: {
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  whiteCard: {
    backgroundColor: theme.palette.background.section_bg,
    borderRadius: 18,
  },
  heading: {
    marginBottom: 7,
    fontSize: 16,
    lineHeight: 20.11,
  },
  time: {
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
  detailsHead: {
    fontSize: 16,
    color: theme.palette.text.secondary,
    marginBottom: 8,
    textAlign: "left",
  },
  detailsSub: {
    fontSize: 16,
    lineHeight: 20.11,
    textAlign: "left",
  },
  more: {
    fontSize: 14,
    color: theme.palette.text.disabled_for_mobile,
  },
  moreBtn: {
    marginTop: 4,
    alignSelf: "flex-end",
  },
  fixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: theme.palette.background.section_bg,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 67,
    shadowColor: theme.palette.background.main_screen_bg,
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
    backgroundColor: theme.palette.cta.Filter_border,
    borderRadius: 12,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  secondaryTxt: {
    color: theme.palette.cta.Filter_border,
  },
  primaryTxt: {
    color: theme.palette.background.section_bg,
  },
  iconAdjust: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
}));
