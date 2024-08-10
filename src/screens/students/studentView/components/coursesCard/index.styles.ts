import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { primary, secondary },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      borderRadius: 18,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    infoBox: {
      paddingLeft: 16,
    },
    subject: {
      fontSize: 16,
      color: primary,
      width: "80%",
      marginBottom: 2,
      textAlign: "left",
    },
    session: {
      fontSize: 12,
      color: secondary,
      paddingTop: 3,
      paddingBottom: 3,
      textAlign: "left",
    },
    date: {
      color: secondary,
      fontSize: 12,
      textAlign: "left",
    },
    fee: {
      color: secondary,
      marginBottom: 4,
      textAlign: "left",
    },
    statusText: {
      fontSize: 12,
      textAlign: "right",
    },
    img: {
      height: 111,
      width: 75,

      borderRadius: 14,
    },
    leftSide: {
      alignItems: "center",
    },
    tag: { color: secondary, fontSize: 14, marginBottom: 3 },
    numbSession: { color: primary },
  };
});
