import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "80%",
    },
    rowListStyle: { alignItems: "center" },
    listStyle: {
      paddingTop: 20,
      paddingBottom: 80,
      paddingHorizontal: 20,
    },
  };
});
