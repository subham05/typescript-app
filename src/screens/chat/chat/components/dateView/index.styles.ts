import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary },
    },
  } = theme;

  return {
    renderDay: {
      fontSize: 12,
      color: primary,
      textAlign: "center",
      marginBottom: 24,
    },
  };
});
