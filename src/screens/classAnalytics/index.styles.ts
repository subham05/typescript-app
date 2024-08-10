import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    listContain: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    head: {
      fontSize: 20,
      marginBottom: 7,
    },
  };
});
