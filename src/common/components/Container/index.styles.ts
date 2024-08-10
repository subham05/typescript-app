import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
    },
  } = theme;

  return {
    spacingHorizontal: {
      paddingHorizontal: 20,
    },
    container: {
      flex: 1,
      backgroundColor: main_screen_bg,
    },
  };
});
