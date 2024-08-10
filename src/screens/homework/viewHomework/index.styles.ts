import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      text: { secondary, disabled_for_mobile },
      cta: { Filter_border },
    },
  } = theme;

  return {
    contain: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    whiteCard: {
      backgroundColor: section_bg,
      borderRadius: 18,
    },
    heading: {
      marginBottom: 7,
      fontSize: 16,
      lineHeight: 20.11,
    },
    time: {
      color: secondary,
      fontSize: 14,
    },
    detailsHead: {
      fontSize: 16,
      color: secondary,
      marginBottom: 8,
    },
    detailsSub: {
      fontSize: 16,
      lineHeight: 20.11,
    },
    more: {
      fontSize: 14,
      color: disabled_for_mobile,
    },
    moreBtn: {
      marginTop: 4,
      alignSelf: "flex-end",
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
    gap: {
      rowGap: 40,
    },
    iconImage: {
      height: 48,
      width: 48,
      borderRadius: 19,
    },
    headingRight: {
      width: "75%",
    },
    boxStyle: { paddingBottom: _isIOS ? 80 : 0 },
  };
});
