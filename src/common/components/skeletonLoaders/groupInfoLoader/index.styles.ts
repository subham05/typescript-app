import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    rowStyle: {
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    details: {
      width: "100%",
    },
    detailsInner: {
      width: "50%",
    },
    middle: {
      marginTop: 12,
    },
    full: {
      width: "85%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    center: {
      alignItems: "center",
    },
  };
});
