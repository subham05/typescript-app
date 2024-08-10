import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return {
    modalContainer: { justifyContent: "flex-end", margin: 0 },
    modalBg: {
      flex: 0.9,
      backgroundColor: section_bg,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    header: {
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
    },
    headingTitle: {
      fontSize: 20,
    },
    close: {
      backgroundColor: theme.transparent.ten,
      height: 32,
      width: 32,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
  };
});
