import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "80%",
    },
    rowStyle: {
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 30,
      width: "100%",
    },
    rowListStyle: { alignItems: "center" },
    listStyle: {
      paddingTop: 30,
      paddingBottom: 80,
      paddingHorizontal: 20,
    },
  };
});
