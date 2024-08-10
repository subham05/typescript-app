import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "85%",
    },
    rowStyle: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    listStyle: {
      paddingTop: 70,
      paddingBottom: 140,
    },
  };
});
