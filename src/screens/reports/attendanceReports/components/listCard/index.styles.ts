import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { secondary: secondaryText },
      decorative: { secondary_blush, primary_indigo, tertiary_mustard },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,
      padding: 28,
    },
    title: {
      fontSize: 16,
      marginBottom: 9,
      textAlign: "left",
    },
    subHeading: {
      color: secondaryText,
      fontSize: 14,
      marginBottom: 3,
      textAlign: "left",
    },
    absentText: {
      color: secondary_blush,
      fontSize: 16,
      textAlign: "left",
    },
    presentText: {
      color: primary_indigo,
      fontSize: 16,
      textAlign: "left",
    },
    totalText: {
      fontSize: 16,
      textAlign: "left",
    },
    percentageBox: {
      position: "absolute",
      width: 52,
      height: 46,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: primary_indigo,
      justifyContent: "center",
      alignItems: "center",
      right: 30,
      top: 0,
    },
    percentText: {
      color: section_bg,
      fontSize: 16,
    },
    average: {
      backgroundColor: tertiary_mustard,
    },
    bad: {
      backgroundColor: secondary_blush,
    },
  };
});
