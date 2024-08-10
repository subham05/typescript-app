import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
      text: { secondary },
    },
  } = theme;

  return {
    bg: {
      backgroundColor: main_screen_bg,
    },
    header: { height: 0 },
    bottomGap: { marginBottom: 80 },
    dayHeader: {
      color: secondary,
      fontSize: 12,
      width: "14.285%",
      textAlign: "center",
    },
  };
});
