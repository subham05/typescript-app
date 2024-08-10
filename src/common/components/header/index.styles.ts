import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  default: {
    backgroundColor: theme.palette.background.main_screen_bg,
    zIndex: 99,
    width: "100%",
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.background.main_screen_bg,
  },
  innerBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  headText: {
    color: theme.palette.text.primary,
    fontSize: 18,
    marginLeft: 6,
  },
  rippleButton: {
    padding: 10,
    borderRadius: 10,
  },
  waves: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: -1,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  elevate: {
    borderBottomColor: theme.palette.border.Attachment_field,
  },
}));
