import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { Tertiary_disaibled_searchbar_other },
    },
  } = theme;

  return {
    dateStyle: {
      marginBottom: 26,
    },
    valueStyle: {
      color: Tertiary_disaibled_searchbar_other,
      marginBottom: 18,
    },
  };
});
