import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    card: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    fit: {
      width: "18%",
    },
    fit1: {
      width: "21%",
      textAlign: "right",
    },
    fit2: { width: "20%", fontSize: 14, textAlign: "center" },
  };
});
