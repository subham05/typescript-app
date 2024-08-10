import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  title: {
    fontSize: 16,
    marginBottom: 12,
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: "left",
  },
  thumb: {
    width: 143,
    height: 90,
    borderRadius: 8,
  },
  review: {
    height: 28,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.palette.cta.Filter_border,
    width: 110,
  },
  reviewText: {
    color: theme.palette.text.primary,
  },
}));
