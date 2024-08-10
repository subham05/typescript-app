import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  checkboxContain: {
    height: 14,
    width: 24,
    borderWidth: 1.5,
    borderColor: theme.palette.text.primary,
    justifyContent: "center",
    borderRadius: 16,
  },
  checked: {
    backgroundColor: theme.palette.decorative.primary_indigo,
    borderColor: theme.palette.decorative.primary_indigo,
  },
  checkMark: {
    color: theme.palette.background.section_bg,
    fontSize: 10,
  },
  round: {
    backgroundColor: theme.palette.background.section_bg,
    height: 7,
    width: 7,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: theme.palette.text.primary,
    left: 2,
  },
  roundChecked: {
    left: 11,
    borderColor: theme.palette.background.section_bg,
  },
  textActive: {
    fontSize: 12,
    marginTop: -2,
  },
}));
