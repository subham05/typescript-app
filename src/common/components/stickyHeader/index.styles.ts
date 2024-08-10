import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
    },
  } = theme;

  return {
    stickyHeader: {
      paddingTop: 10,
      zIndex: 9,
      backgroundColor: main_screen_bg,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
    },
  };
});
