import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      cta: { Filter_border },
      text: { primary },
    },
  } = theme;

  return {
    contain: {
      paddingHorizontal: 20,
      paddingBottom: 160,
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
    dash: {
      height: 2,
      width: 6,
      backgroundColor: primary,
      alignSelf: "center",
    },
    timeSelect: {
      paddingTop: 20,
      columnGap: 14,
    },
    details: {
      fontSize: 17,
      textAlign: "left",
    },
  };
});
