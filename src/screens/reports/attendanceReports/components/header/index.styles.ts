import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, main_screen_bg },
      decorative: { primary_indigo, secondary_blush, tertiary_mustard },
      text: { secondary },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 20,
      paddingHorizontal: 25,
      paddingVertical: 18,
    },
    cardHeading: {
      fontSize: 16,
      paddingBottom: 13,
      marginTop: 6,
    },
    filter: {
      backgroundColor: main_screen_bg,
      width: 102,
      borderColor: main_screen_bg,
      height: 34,
    },
    round: {
      height: 12,
      width: 12,
      borderRadius: 20,
      backgroundColor: primary_indigo,
    },
    roundAbsent: {
      height: 12,
      width: 12,
      borderRadius: 20,
      backgroundColor: secondary_blush,
    },
    roundLate: {
      height: 12,
      width: 12,
      borderRadius: 20,
      backgroundColor: tertiary_mustard,
    },
    demo: {
      alignItems: "center",
    },
    dayHeader: {
      width: 30,
      color: secondary,
      fontSize: 12,
      textAlign: "center",
    },
    barContain: {
      width: 30,
      alignItems: "center",
    },
    days: {
      paddingBottom: 21,
      paddingTop: 11,
    },
    graph: {
      paddingTop: 10,
    },
    bar: {
      height: 120,
      width: 20,
      borderRadius: 20,
      justifyContent: "flex-end",
      overflow: "hidden",
    },
    width: {
      borderRadius: 20,
      width: "100%",
    },
    presentBar: {
      backgroundColor: primary_indigo,
    },
    absentBar: {
      backgroundColor: secondary_blush,
    },
  };
});
