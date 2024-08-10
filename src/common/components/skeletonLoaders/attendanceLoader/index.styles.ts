import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    rowStyle: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    listStyle: {
      paddingTop: 70,
      paddingBottom: 140,
      width: "100%",
    },
    topCards: {
      justifyContent: "space-between",
      width: "100%",
      flexWrap: "wrap",
    },
    smallBox: {
      width: "30%",
      paddingVertical: 20,
    },
  };
});
