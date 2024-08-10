import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, main_screen_bg },
    },
  } = theme;

  return {
    container: {
      paddingHorizontal: 11,
      paddingBottom: 100,
    },
    bgWeek: {
      backgroundColor: section_bg,
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 11,
    },
    bgRow: { flexDirection: "row" },
    weekContainer: { flexGrow: 1, paddingHorizontal: 11, paddingBottom: 100 },
    weekHorizontal: { flexDirection: "row" },
    topWeeks: {
      backgroundColor: main_screen_bg,
      borderRadius: 12,
      padding: 12,
      marginLeft: 60,
      marginBottom: 10,
    },
  };
});
