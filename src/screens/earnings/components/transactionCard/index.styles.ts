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
      paddingVertical: 23,
      paddingHorizontal: 25,
      backgroundColor: section_bg,
      borderRadius: 18,
    },
    title: {
      fontSize: 18,
      textAlign: "left",
    },
    status: {
      fontSize: 12,
      color: secondary,
    },
    top: {
      justifyContent: "space-between",
      alignItems: "flex-end",
      width: "100%",
    },
    column: {
      width: "33%",
    },
    smallTitle: {
      color: secondary,
      textAlign: "left",
    },
    types: {
      fontSize: 12,
      marginTop: 3,
      textAlign: "left",
      color: secondary,
    },
    align: {
      textAlign: "left",
    },
  };
});
