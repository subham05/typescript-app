import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg },
      decorative: {
        primary_indigo,
        class_block_bg,
        webinar_block_bg,
        tertiary_mustard,
        exam_block_bg,
        secondary_blush,
      },
      text: { secondary },
      border: { Attachment_field },
    },
  } = theme;

  return {
    container: {
      borderWidth: 0.5,
      borderColor: Attachment_field,
      width: "13%",
    },
    lineBold: {
      marginTop: 8,
      marginRight: 8,
      height: 40,
      width: 3,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      backgroundColor: primary_indigo,
    },
    leftTime: {
      height: 70,
    },
    start: { color: secondary, fontSize: 12 },
    end: {
      color: secondary,
      fontSize: 12,
      marginTop: 56,
    },
    right: {
      flexDirection: "row",
      alignItems: "center",
    },

    line: {
      backgroundColor: Attachment_field,
      height: 2,
      width: 15,
      position: "absolute",
      top: 38,
      right: 10,
    },
    weekInnerCard: {
      height: 70,
      padding: 2,

      width: "14.2%",
      justifyContent: "center",
    },
    innerCardLine: {
      width: 2,
      height: "90%",
      backgroundColor: primary_indigo,
      borderTopRightRadius: 3,
      borderBottomRightRadius: 3,
      marginTop: 6,
    },
    subjectStyle: {
      fontSize: 10,
      paddingHorizontal: 4,
    },
    timeStyle: {
      fontSize: 10,
      color: secondary,
      paddingHorizontal: 4,
    },
    subjectCardStyle: {
      borderRadius: 5,
      paddingVertical: 5,
      marginVertical: 2,
      backgroundColor: class_block_bg,
    },
    borderStyle: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: "hidden",
    },
    weekOffStyle: {
      backgroundColor: main_screen_bg,
      borderRadius: 0,
      marginVertical: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    rotated: { transform: [{ rotate: "270deg" }], width: 100, opacity: 0.4 },
    yellow: {
      backgroundColor: webinar_block_bg,
    },
    yellowLine: {
      backgroundColor: tertiary_mustard,
    },
    blush: {
      backgroundColor: exam_block_bg,
    },
    blushLine: {
      backgroundColor: secondary_blush,
    },
    recessContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    recessTag: {
      padding: 2,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: primary_indigo,
      transform: [{ rotate: "340deg" }],
    },
    recessText: {
      fontSize: 7,
      color: primary_indigo,
    },
    full: {
      height: "100%",
    },
  };
});
