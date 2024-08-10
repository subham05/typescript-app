import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  inputStyle: {
    flexDirection: "row",
    flexGrow: 1,
    height: 24,
    fontSize: 16,
    padding: 0,
    color: theme.palette.text.primary,
  },
}));
