import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "100%",
    },
    rowStyle: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    listStyle: {
      paddingTop: 100,
      paddingBottom: 140,
    },
  };
});
