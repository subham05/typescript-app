import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo, tertiary_mustard, secondary_blush },
      border: { Border_topmenu, Filter },
    },
  } = theme;

  return {
    bar: {
      width: 82,
      borderRadius: 6,
      height: 7,

      backgroundColor: Border_topmenu,
      alignItems: "flex-start",
    },
    btnRating: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: Filter,
    },
    btnText: {
      color: Filter,
    },
    ratingBar: {
      alignItems: "center",
    },
    number: {
      fontSize: 18,
    },
    barInner: {
      height: 7,
      backgroundColor: primary_indigo,
      borderRadius: 6,
    },
    average: {
      backgroundColor: tertiary_mustard,
    },
    bad: {
      backgroundColor: secondary_blush,
    },
  };
});
