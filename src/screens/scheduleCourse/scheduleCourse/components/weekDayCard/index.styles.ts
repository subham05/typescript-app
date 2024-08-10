import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      decorative: { primary_indigo },
      text: { Tertiary_disaibled_searchbar_other },
    },
  } = theme;

  return {
    dayCard: {
      width: 26,
      justifyContent: "center",
      alignItems: "center",
    },
    selectBox: {
      width: 26,
      height: 26,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 2,
    },
    daysContainer: {
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
    date: {
      fontSize: 12,
    },
    day: {
      fontSize: 10,
      color: Tertiary_disaibled_searchbar_other,
    },
    currentDate: {
      backgroundColor: primary_indigo,
      borderRadius: 8,
    },
    currentDateText: {
      color: section_bg,
    },
  };
});
