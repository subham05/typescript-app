import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  profileImg: {
    height: 58,
    width: 58,
    borderRadius: 12,
    resizeMode: "cover",
  },
  delete: {
    position: "absolute",
    right: -4,
    bottom: -4,
    backgroundColor: theme.palette.cta.Filter_border,
    height: 24,
    width: 24,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
}));
