import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, main_screen_bg },
      decorative: { primary_indigo },
    },
  } = theme;
  return {
    listContain: {
      paddingHorizontal: 11,
      paddingBottom: 100,
      paddingTop: 16,
    },

    fixed: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: section_bg,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 67,
      shadowColor: main_screen_bg,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    secondaryBtn: {
      height: 40,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    primaryBtn: {
      height: 40,
      backgroundColor: primary_indigo,
      borderRadius: 12,
      paddingHorizontal: 25,
      justifyContent: "center",
    },
    secondaryTxt: {
      color: primary_indigo,
    },
    primaryTxt: {
      color: section_bg,
    },
  };
});
