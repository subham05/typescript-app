import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  batch: {
    height: 10,
    width: 10,
    borderRadius: 8,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: theme.palette.decorative.secondary_blush,
  },
}));
