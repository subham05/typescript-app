import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  resourceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  resourceHead: {
    fontSize: 18,
    marginBottom: 2,
  },
  all: {
    color: theme.palette.decorative.primary_indigo,
    fontSize: 14,
  },
}));
