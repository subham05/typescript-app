import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
      text: { secondary },
    },
  } = theme;

  return {
    container: {
      flexGrow: 1,
      justifyContent: "space-between",
    },
    keyBoardContainer: {
      flexGrow: 1,
      backgroundColor: main_screen_bg,
    },
    top: {
      alignItems: "center",
    },
    back: {
      position: "absolute",
      left: 0,
      top: 0,
      resizeMode: "contain",
      width: "100%",
      height: "100%",
    },
    heading: {
      fontSize: 36,
      marginBottom: 12,
      textAlign: "left",
    },
    btnLogin: {
      alignSelf: "flex-end",
    },
    desc: {
      color: secondary,
      lineHeight: 17.6,
      marginBottom: 40,
      textAlign: "left",
    },
  };
});
