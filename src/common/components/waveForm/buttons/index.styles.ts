import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    gradient: {
      borderRadius: 3,
      height: 32,
      width: 32,
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
