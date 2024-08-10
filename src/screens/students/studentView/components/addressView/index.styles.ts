import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { secondary },
    },
  } = theme;

  return {
    subtitle: {
      fontSize: 16,
      color: secondary,
      marginBottom: 6,
      textAlign: "left",
    },
    values: {
      fontSize: 16,
      textAlign: "left",
    },
  };
});
