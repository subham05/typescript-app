import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { secondary },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 20,
      padding: 25,
    },
    title: {
      color: secondary,
      fontSize: 16,
    },
    content: {
      fontSize: 16,
      marginTop: 10,
    },
    thirty: {
      width: "33%",
    },
  };
});
