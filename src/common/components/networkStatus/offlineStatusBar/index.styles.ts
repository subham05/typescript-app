import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  container: {
    height: 40,
    zIndex: 99,
    marginHorizontal: -20,
  },
  textColors: {
    marginLeft: 8,
  },
  onlineTextColor: {
    marginLeft: 8,
    color: theme.palette.background.section_bg,
  },
}));
