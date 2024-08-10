import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { secondary },
      decorative: { primary_indigo },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,

      padding: 20,
    },
    thumbnail: {
      height: 250,
      borderRadius: 24,
      width: "100%",
    },
    heading: {
      fontSize: 18,
      paddingVertical: 10,
      textAlign: "left",
    },
    desc: { lineHeight: 18, color: secondary, textAlign: "left" },
    author: {
      paddingVertical: 10,
      color: primary_indigo,
      fontSize: 16,
      textAlign: "left",
    },
    time: {
      color: secondary,
      paddingBottom: 20,
      textAlign: "left",
    },
    rating: {
      alignItems: "center",
    },
    ratingText: {
      fontSize: 18,
      color: secondary,
      paddingRight: 3,
    },
    bottom: {
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingTop: 13,
    },
    price: {
      fontSize: 20,
    },
    btn: {
      width: 128,
    },
  };
});
