import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "80%",
    },
    rowStyle: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    listStyle: {
      paddingTop: 20,
      paddingBottom: 140,
    },
  };
});
