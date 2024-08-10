import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "100%",
    },
    rowStyle: {
      alignItems: "center",
      width: "100%",
    },
    rowStyleContainer: { width: "80%" },
    rowListStyle: { alignItems: "center" },
    listStyle: {
      paddingBottom: 80,
      paddingHorizontal: 20,
    },
  };
});
