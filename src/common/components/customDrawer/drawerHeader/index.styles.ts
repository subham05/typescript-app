import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  bg: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    borderBottomColor: theme.palette.border.For_card_border,
    borderBottomWidth: 1,
  },
  content: {
    alignItems: "center",
  },
  name: {
    color: theme.palette.decorative.primary_indigo,
    fontSize: 20,
    paddingLeft: I18nManager.isRTL ? 0 : 15,
    paddingRight: I18nManager.isRTL ? 15 : 0,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  adjust: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
}));
