import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      decorative: { primary_indigo, tertiary_mustard },
    },
  } = theme;

  return {
    cardImg: { height: 250, width: "100%" },
    img: {
      height: 36,
      width: 36,
      resizeMode: "cover",
      borderRadius: 10,
    },
    imgAnswer: {
      height: 36,
      width: 36,
      resizeMode: "cover",
      borderRadius: 10,
      borderWidth: 2,
      borderColor: tertiary_mustard,
    },
    card: {
      backgroundColor: section_bg,
      borderRadius: 16,
      paddingHorizontal: 20,
      paddingVertical: 24,
    },
    nameStyle: {
      fontSize: 18,
    },
    timeStyle: {
      fontSize: 12,
    },
    right: {
      width: "85%",
    },
    questionStyle: {
      fontSize: 14,
      paddingTop: 16,
      lineHeight: 18,
    },
    cta: {
      color: primary_indigo,
      fontSize: 16,
      marginTop: 20,
    },
    answerList: {
      marginTop: 14,
    },
    timing: {
      color: primary_indigo,
    },
  };
});
