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

      paddingVertical: 26,
      paddingHorizontal: 13,
    },
    head: {
      fontSize: 18,
      paddingBottom: 14,
    },
    description: {
      fontSize: 16,
      lineHeight: 21,
      color: secondary,
    },
    linkTop: {
      marginTop: 20,
      fontSize: 16,
    },
    linkStyle: {
      fontSize: 16,
      color: primary_indigo,
    },
    posterStyle: {
      height: 174,
      width: "100%",
      borderRadius: 20,
      marginTop: 16,
    },
  };
});
