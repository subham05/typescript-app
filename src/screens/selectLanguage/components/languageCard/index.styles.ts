import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  text: {
    color: theme.palette.text.primary,
    fontSize: 16,
    marginLeft: 16,
  },
  cardStyle: {
    backgroundColor: theme.palette.background.section_bg,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 16,
  },
}));
