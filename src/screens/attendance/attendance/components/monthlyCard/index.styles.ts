import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: {
        section_bg,
        main_screen_bg,
        week_highlight_attendance_loader_bg,
      },
      text: { secondary, disabled_for_mobile },
      decorative: { primary_indigo, tertiary_mustard, secondary_blush },
    },
  } = theme;

  return {
    cardContain: {
      width: "100%",
      minHeight: 68,
      paddingHorizontal: 2,
      paddingVertical: 4,
      backgroundColor: main_screen_bg,
    },
    card: {
      backgroundColor: section_bg,
      borderRadius: 8,
      height: 60,
      padding: 6,
    },
    dayText: {
      fontSize: 10,
      marginBottom: 4,
      textAlign: "right",
    },
    more: {
      color: secondary,
      fontSize: 10,
      textAlign: "center",
    },
    faded: {
      color: disabled_for_mobile,
    },
    weekDayStyle: {
      justifyContent: "center",
      alignItems: "center",
    },
    percentage: {
      fontSize: 12,
      textAlign: "center",
      marginTop: 5,
    },
    bar: {
      height: 4,
      borderRadius: 4,
      marginVertical: 4,
      backgroundColor: week_highlight_attendance_loader_bg,
    },
    width: {
      height: "100%",
      borderRadius: 4,
      backgroundColor: primary_indigo,
    },
    average: { backgroundColor: tertiary_mustard },
    bad: { backgroundColor: secondary_blush },
  };
});
