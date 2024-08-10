import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => ({
  profileImg: {
    height: 42,
    width: 42,
    resizeMode: "cover",
  },
  left: {
    alignItems: "center",
  },
  names: {
    marginLeft: 19,
    fontSize: 16,
  },
}));
