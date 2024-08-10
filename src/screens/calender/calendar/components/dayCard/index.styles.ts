import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      border: { Text_fields },
      decorative: { primary_indigo },
      text: { Tertiary_disaibled_searchbar_other },
    },
  } = theme;

  return {
    dayCard: {
      height: 76,
      width: 58,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: section_bg,
      borderWidth: 1,
      borderColor: Text_fields,
      marginLeft: 12,
    },
    daysContainer: {
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
    date: {
      fontSize: 20,
    },
    day: {
      fontSize: 14,
      color: Tertiary_disaibled_searchbar_other,
    },
    currentDate: {
      backgroundColor: primary_indigo,
      height: 84,
    },
    currentDateText: {
      color: section_bg,
    },
  };
});
