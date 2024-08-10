import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary },
    },
  } = theme;

  return {
    containList: {
      paddingHorizontal: 18,
      paddingTop: 110,
      paddingBottom: 150,
    },

    recording: {
      alignSelf: "flex-end",
      marginRight: 8,
    },
    filterText: {
      marginRight: 6,
      fontSize: 14,
      color: primary,
    },
    filterScroll: {
      paddingHorizontal: 18,
      justifyContent: "flex-end",
    },
  };
});
