import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, week_highlight_attendance_loader_bg },
      border: { Text_fields },
      text: { secondary },
      decorative: { secondary_blush, tertiary_mustard, primary_indigo },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 21,
      padding: 10,
      width: "32%",
      height: 112,
      justifyContent: "space-between",
    },
    monthStyle: {
      fontSize: 12,
      textAlign: "right",
    },
    row: {
      alignItems: "center",
    },
    dot: {
      height: 6,
      width: 6,
      borderRadius: 4,
      backgroundColor: Text_fields,
    },
    good: {
      height: 6,
      width: 6,
      borderRadius: 4,
      backgroundColor: primary_indigo,
    },
    average: { backgroundColor: tertiary_mustard },
    bad: { backgroundColor: secondary_blush },
    subTitle: {
      paddingHorizontal: 4,
      fontSize: 10,
      color: secondary,
    },
    value: { fontSize: 10 },
    bar: {
      height: 5,
      borderRadius: 4,
      marginVertical: 4,
      backgroundColor: week_highlight_attendance_loader_bg,
    },
    width: {
      height: "100%",
      borderRadius: 4,
      backgroundColor: primary_indigo,
    },
  };
});
