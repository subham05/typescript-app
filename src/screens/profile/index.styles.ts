import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { secondary },
      decorative: { primary_indigo },
      background: { week_section_bg, main_screen_bg },
    },
  } = theme;
  return {
    listContain: {
      paddingHorizontal: 45,
      paddingBottom: 100,
    },
    subtitle: {
      fontSize: 16,
      color: secondary,
      marginBottom: 6,
      textAlign: "left",
    },
    values: {
      fontSize: 16,
      textAlign: "left",
    },
    groupImg: {
      height: 148,
      width: 148,
      borderRadius: 48,
      resizeMode: "cover",
    },
    name: {
      color: primary_indigo,
      fontSize: 20,
      marginTop: 14,
      textAlign: "center",
      marginBottom: 55,
    },
    profileContain: {
      height: 148,
      width: 148,
      alignSelf: "center",
    },
    edit: {
      height: 42,
      width: 42,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      bottom: 0,
      backgroundColor: week_section_bg,
    },
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
