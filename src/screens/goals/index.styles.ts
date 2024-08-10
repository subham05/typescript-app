import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
      background: { section_bg, main_screen_bg },
    },
    transparent: { ten },
  } = theme;

  return {
    goalsBox: {
      backgroundColor: ten,
      width: "100%",
      borderRadius: 12,
      height: 36,
      alignItems: "center",
      paddingHorizontal: 20,
    },
    variableWidth: {
      height: "100%",
      borderRadius: 12,
      position: "absolute",
      zIndex: -1,
      backgroundColor: primary_indigo,
    },
    heading: {
      fontSize: 14,
      textAlign: "left",
    },
    goalsCount: {
      fontSize: 16,
    },
    listContain: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 80,
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
    cancel: {
      backgroundColor: section_bg,
    },
    card: {
      backgroundColor: section_bg,
      padding: 20,
      borderRadius: 16,
    },
    saveStyle: {
      alignSelf: "flex-end",
    },
    name: { fontSize: 16 },
    subTitle: {
      fontSize: 14,
      color: theme.palette.text.secondary,
      marginTop: 3,
      marginBottom: 18,
    },
    boxStyle: { paddingBottom: _isIOS ? 80 : 0 },
  };
});
