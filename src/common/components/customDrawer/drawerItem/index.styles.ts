import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  cardContain: {
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.palette.border.For_card_border,
    marginTop: 16,
    padding: 20,
  },
  heading: { fontSize: 18, textAlign: "left" },
  description: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    marginTop: 6,
    textAlign: "left",
  },
  reportSubText: {
    paddingLeft: I18nManager.isRTL ? 0 : 10,
    fontSize: 12,
    paddingRight: I18nManager.isRTL ? 10 : 0,
  },
  borderTop: {
    paddingTop: 15,
    paddingLeft: 60,
    width: "100%",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.palette.border.For_card_border,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  reportList: {
    alignItems: "center",
  },
  reportStyle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    paddingBottom: 13,
  },
  line: {
    height: 1,
    backgroundColor: theme.palette.border.For_card_border,
    marginLeft: 60,
    marginRight: 20,
  },
}));
