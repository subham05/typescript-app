import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo, tertiary_mustard, secondary_blush },
      background: { section_bg },
      border: { Border_topmenu, Filter },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,
      flexDirection: "row",
      paddingHorizontal: 26,
      paddingVertical: 17,
    },
    profile: {
      height: 64,
      width: 64,
      borderRadius: 16,
      resizeMode: "cover",
    },
    title: {
      fontSize: 18,
      marginBottom: 3,
      textAlign: "left",
    },
    right: {
      width: "60%",
      paddingLeft: 20,
      justifyContent: "space-between",
    },
    subjectTitle: {
      fontSize: 14,
      textAlign: "left",
    },
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
    date: {
      fontSize: 12,
    },
  };
});
