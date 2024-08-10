import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      decorative: { primary_indigo },
      text: { secondary },
    },
  } = theme;

  return {
    card: {
      paddingVertical: 23,
      paddingHorizontal: 25,
      backgroundColor: section_bg,
      borderRadius: 18,
    },
    title: {
      fontSize: 18,
    },
    status: {
      fontSize: 12,
      color: primary_indigo,
    },
    top: {
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    column: {
      width: "33%",
    },
    smallTitle: {
      color: secondary,
    },
    bottomText: {
      paddingLeft: 5,
    },
  };
});
