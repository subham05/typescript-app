import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  head: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 21,
  },
}));
