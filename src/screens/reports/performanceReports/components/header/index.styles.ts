import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      decorative: { cambridge_blue },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 20,
      padding: 25,
    },
    cardHeading: {
      fontSize: 16,
      paddingBottom: 13,
      textAlign: "left",
    },
    gradeText: {
      fontSize: 30,
      paddingBottom: 8,
      textAlign: "left",
    },
    container: {
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 20,
    },
    remark: {
      color: cambridge_blue,
      lineHeight: 18,
      textAlign: "left",
    },
    right: {
      width: "50%",
    },
    progressText: {
      fontSize: 32,
      textAlign: "center",
    },
    backgroundProgress: {
      transform: [{ rotate: "-18deg" }],
      position: "absolute",
      zIndex: -1,
    },
  };
});
