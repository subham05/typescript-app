import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { primary, secondary, disabled_for_mobile },
      cta: { Primary_default },
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
      width: "70%",
    },
    subject: {
      fontSize: 16,
      color: primary,
      textAlign: "left",
    },
    subjectTag: {
      color: disabled_for_mobile,
      fontSize: 12,
      marginLeft: 8,
      marginTop: 2,
    },
    session: {
      fontSize: 12,
      color: secondary,
      textAlign: "left",
    },
    date: {
      color: secondary,
      fontSize: 12,
      textAlign: "left",
    },
    ctaBtn: {
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: Primary_default,
    },
    ctaText: {
      color: Primary_default,
      fontSize: 12,
    },
    statusText: {
      fontSize: 12,
      textAlign: "right",
    },
    img: {
      height: 56,
      width: 45,
      resizeMode: "contain",
    },
    leftSide: {
      alignItems: "center",
      width: "78%",
    },
  };
});
