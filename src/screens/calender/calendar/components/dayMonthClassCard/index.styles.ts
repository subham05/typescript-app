import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => ({
  card: {
    minWidth: "95%",
    height: 23,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 1,
  },
  line: { height: 11, width: 3, borderRadius: 2 },

  text: {
    paddingLeft: 4,
    fontSize: 10,
  },
}));
