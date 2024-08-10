import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    rowStyle: {
      width: "100%",
    },
    details: {
      width: "100%",
    },
    detailsInner: {
      width: "50%",
    },
    middle: {
      marginTop: 20,
    },
  };
});
