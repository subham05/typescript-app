import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary },
    },
  } = theme;

  return {
    container: {
      paddingHorizontal: 40,
      paddingBottom: 40,
    },
    text: {
      color: primary,
      fontSize: 30,
      marginBottom: 20,
    },
    img: {
      width: "100%",
      resizeMode: "contain",
      height: 300,
    },
  };
});
