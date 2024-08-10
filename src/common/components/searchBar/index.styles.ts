import { themeStyles } from "@common/theme";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => ({
  searchBar: {
    backgroundColor: theme.transparent.ten,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputStyle: {
    flexDirection: "row",
    paddingLeft: 18,
    height: "100%",
    width: "80%",
    color: theme.palette.text.primary,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  left: { alignItems: "center" },
}));
