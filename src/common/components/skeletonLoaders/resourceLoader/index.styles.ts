import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    full: {
      width: "80%",
    },
    rowStyle: {
      alignItems: "center",
      width: "100%",
    },
    rowListStyle: { alignItems: "center" },
    listStyle: {
      paddingTop: 120,
      paddingBottom: 180,
      paddingHorizontal: 20,
      width: "100%",
    },
    heading: {
      width: "100%",
      paddingBottom: 20,
      alignItems: "center",
    },
  };
});
