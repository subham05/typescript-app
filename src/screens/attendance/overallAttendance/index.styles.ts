import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => {
  return {
    listContain: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    listHeading: {
      marginTop: 50,
      marginBottom: 30,
      fontSize: 16,
    },
  };
});
