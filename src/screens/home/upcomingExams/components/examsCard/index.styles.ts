import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { secondary },
      decorative: { secondary_blush },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,

      paddingVertical: 26,
      paddingHorizontal: 23,
    },
    head: {
      fontSize: 18,
      paddingBottom: 12,
    },
    time: {
      fontSize: 14,
      color: secondary,
    },
    titleHead: {
      fontSize: 16,
      color: secondary,
      paddingBottom: 12,
    },
    info: {
      minWidth: "90%",
      maxWidth: "95%",
      lineHeight: 20,
      fontSize: 16,
    },
    join: { alignSelf: "flex-end" },
    half: {
      width: "50%",
    },
    dot: {
      color: secondary_blush,
    },
  };
});
