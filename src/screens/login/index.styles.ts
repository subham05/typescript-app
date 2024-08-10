import { themeStyles } from "@common/theme";
import { Dimensions, I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
      decorative: { primary_indigo },
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
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      width: "100%",
    },
    back: {
      position: "absolute",
      left: I18nManager.isRTL ? "-12%" : "-5%",
      top: "13%",
      resizeMode: "contain",
      width: "100%",
      height: "100%",
    },
    main: {
      marginTop: 120,
    },
    heading: {
      fontSize: 36,
      marginBottom: 40,
      textAlign: "left",
    },
    forgot: {
      color: primary_indigo,
      fontSize: 14,
    },
    forgotBtn: {
      alignSelf: "flex-end",
      marginTop: 20,
    },
    btnLogin: {
      alignSelf: "flex-end",
    },
    disable: {
      display: "none",
    },
    mainBox: {
      flexGrow: 1,
      marginTop: Dimensions.get("screen").height > 700 ? 420 : 50,
    },
  };
});
