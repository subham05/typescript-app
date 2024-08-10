import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      decorative: { primary_indigo },
    },
  } = theme;

  return {
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
      paddingBottom: _isIOS ? 80 : 0,
    },
    cancel: {
      backgroundColor: section_bg,
    },
    buttonView: { paddingHorizontal: 20 },
    joinText: {
      color: primary_indigo,
      fontSize: 16,
    },
  };
});
