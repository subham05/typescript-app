import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo, tertiary_mustard, secondary_blush },
      border: { Border_topmenu },
    },
  } = theme;

  return {
    heading: {
      fontSize: 30,
    },
    schoolCard: {
      backgroundColor: primary_indigo,
      borderRadius: 32,
      height: 184,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    imageSchool: {
      height: 127,
      width: 155,
      resizeMode: "contain",
    },
    circleTop: {
      backgroundColor: Border_topmenu,
      opacity: 0.2,
      height: 85,
      width: 85,
      position: "absolute",
      top: -20,
      right: -20,
      borderRadius: 50,
    },
    circleBottom: {
      backgroundColor: Border_topmenu,
      opacity: 0.2,
      height: 85,
      width: 85,
      position: "absolute",
      bottom: -50,
      left: -10,
      borderRadius: 50,
    },
    custom: {
      backgroundColor: secondary_blush,
      opacity: 0.1,
    },
    tuitionCard: {
      backgroundColor: tertiary_mustard,
      borderRadius: 32,
      height: 184,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    name: {
      fontSize: 16,
      marginTop: 14,
      textAlign: "center",
    },
  };
});
