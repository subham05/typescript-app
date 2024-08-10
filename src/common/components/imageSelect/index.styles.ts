import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
    },
  } = theme;
  return {
    customModal: {
      flex: 0.3,
    },
    cta: {
      backgroundColor: main_screen_bg,
      width: "48%",
      height: 120,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    ctaText: {
      marginTop: 8,
      fontSize: 12,
    },
  };
});
