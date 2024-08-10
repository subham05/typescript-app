import { themeStyles } from "@common/theme";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, main_screen_bg },
      cta: { Filter_border },
      text: { primary },
    },
  } = theme;
  const { width } = useScreenDimensions();
  return {
    container: {
      flex: 1,
      backgroundColor: section_bg,
    },

    customModal: {
      backgroundColor: main_screen_bg,
    },
    answerModal: {
      flex: 0.5,
    },
    modalList: {
      paddingTop: 10,
      paddingHorizontal: 20,
      paddingBottom: 60,
    },
    filterStyle: { marginLeft: 16 },
    customDropStyle: {
      width: 161,
      borderRadius: 12,
      right: 20,
      left: width - 188,
      padding: 12,
    },
    filter: {
      backgroundColor: "transparent",
      position: "relative",
      marginBottom: 0,
    },
    fixed: {
      width: "100%",
      backgroundColor: section_bg,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 67,
      shadowColor: primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 10,
    },
    secondaryBtn: {
      height: 40,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    primaryBtn: {
      height: 40,
      backgroundColor: Filter_border,
      borderRadius: 12,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    secondaryTxt: {
      color: Filter_border,
    },
    primaryTxt: {
      color: section_bg,
    },
    answerContainer: {
      paddingHorizontal: 20,
      paddingBottom: 90,
      flexGrow: 1,
    },
    img: {
      height: 36,
      width: 36,
      borderRadius: 10,
      resizeMode: "cover",
    },
    answerTop: {
      alignItems: "center",
      marginBottom: 24,
    },
    name: {
      fontSize: 20,
      paddingHorizontal: 10,
    },
    time: {
      fontSize: 16,
      color: Filter_border,
    },
  };
});
