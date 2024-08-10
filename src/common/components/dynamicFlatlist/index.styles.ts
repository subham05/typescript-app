import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => ({
  containList: {
    paddingHorizontal: 20,
    paddingBottom: 120,
    paddingTop: 70,
  },

  loader: {
    alignSelf: "center",
    marginTop: 10,
  },
  nodata: {
    alignSelf: "center",
  },
  disable: {
    opacity: 0,
  },
}));
