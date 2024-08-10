import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      text: { secondary, disabled_for_mobile },
      decorative: { primary_indigo },
    },
  } = theme;

  return {
    container: {
      flex: 1,
      backgroundColor: main_screen_bg,
    },
    contain: {
      paddingHorizontal: 20,
      paddingBottom: 70,
    },
    whiteCard: {
      backgroundColor: section_bg,
      borderRadius: 18,
    },
    heading: {
      marginBottom: 7,
      fontSize: 20,
      lineHeight: 25.11,
      textAlign: "left",
    },
    time: {
      color: secondary,
      fontSize: 14,
      textAlign: "left",
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
    joinText: {
      color: primary_indigo,
      fontSize: 16,
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
    block: {
      height: 24,
      width: 24,
      borderRadius: 8,
      backgroundColor: primary_indigo,
    },
  };
});
