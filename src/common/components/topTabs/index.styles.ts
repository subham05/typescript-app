import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: theme.palette.background.main_screen_bg,
  },
  bar: {
    height: 3,
    backgroundColor: theme.palette.border.Filter,
    width: "50%",
    position: "absolute",
    bottom: 0,
  },
  default: {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.background.main_screen_bg,
    zIndex: 99,
  },
}));
