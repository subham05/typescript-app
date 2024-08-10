import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  tabText: {
    color: theme.palette.text.primary,
    fontSize: 16,
  },
  tabBtn: {
    alignItems: "center",
    width: "33.33%",
  },
}));
