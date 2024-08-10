import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return {
    card: {
      borderRadius: 42,
      paddingTop: 24,
      paddingLeft: 24,
      paddingRight: 11,
      width: "48%",
      height: 156,
      justifyContent: "space-between",
    },
    title: {
      fontSize: 12,
      color: section_bg,
      paddingLeft: 7,
    },
    value: {
      fontSize: 72,
      color: section_bg,
      textAlign: "right",
    },
    percent: {
      fontSize: 30,
      color: section_bg,
    },
    top: { alignItems: "center" },
  };
});
