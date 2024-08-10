import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg, main_screen_bg },
      decorative: {
        class_block_img_bg,
        primary_indigo,
        tertiary_mustard,
        secondary_blush,
      },
      text: { secondary, disabled_for_mobile },
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
      fontSize: 12,
      color: secondary,
      textAlign: "left",
    },
    subjectTag: {
      color: disabled_for_mobile,
      fontSize: 12,
      marginLeft: 8,
      marginTop: 2,
    },
    session: {
      fontSize: 14,
      color: secondary,
      lineHeight: 17,
      textAlign: "left",
    },
    date: {
      color: secondary,
      fontSize: 12,
      marginTop: 7,
      textAlign: "left",
    },
    statusText: {
      fontSize: 14,
      textAlign: "right",
    },
    img: {
      height: 45,
      width: 45,
      backgroundColor: class_block_img_bg,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
    leftSide: {
      width: "78%",
    },
    boxGrade: {
      height: 43,
      width: 43,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: main_screen_bg,
    },
    textGrade: {
      fontSize: 28,
    },
    good: {
      color: primary_indigo,
    },
    average: {
      color: tertiary_mustard,
    },
    bad: {
      color: secondary_blush,
    },
  };
});
