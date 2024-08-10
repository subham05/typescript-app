import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  checkboxContain: {
    height: 20,
    width: 20,
    borderWidth: 1.5,
    borderColor: theme.palette.text.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  checked: {
    backgroundColor: theme.palette.decorative.primary_indigo,
    borderColor: theme.palette.decorative.primary_indigo,
  },
  checkMark: {
    color: theme.palette.background.section_bg,
    fontSize: 10,
  },
}));
