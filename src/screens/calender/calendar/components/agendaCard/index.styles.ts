import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: {
        primary_indigo,
        class_block_bg,
        class_block_img_bg,
        secondary_blush,
        tertiary_mustard,
        webinar_block_img_bg,
      },
      text: { secondary },
      cta: { Filter_bg },
      border: { Attachment_field },
    },
  } = theme;

  return {
    container: {
      flexDirection: "row",
      alignItems: "center",
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
      width: "18%",
      height: 70,
    },
    start: { color: secondary, fontSize: 12 },
    end: {
      color: secondary,
      fontSize: 12,
      marginTop: 56,
    },
    right: {
      width: "82%",
      flexDirection: "row",
      alignItems: "center",
    },
    cardInner: {
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "hidden",
      backgroundColor: class_block_bg,
      height: 68,
      marginTop: 4,
      flexGrow: 1,
      alignItems: "center",
      borderRadius: 20,
    },
    join: {
      backgroundColor: primary_indigo,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      minHeight: 28,
      minWidth: 60,
    },
    joinText: {
      color: Filter_bg,
      fontSize: 10,
    },
    subject: {
      maxWidth: "80%",
      fontSize: 14,
      marginBottom: 4,
      textAlign: "left",
    },
    times: {
      fontSize: 10,
      color: secondary,
    },
    inner: {
      flexDirection: "row",
      alignItems: "center",
      width: "65%",
    },
    imgCard: {
      height: 40,
      width: 40,
      borderRadius: 30,
      resizeMode: "cover",
    },
    joinAt: {
      fontSize: 10,
    },
    changeColor: {
      position: "absolute",
      zIndex: -1,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
    line: {
      backgroundColor: Attachment_field,
      height: 2,
      width: 15,
      position: "absolute",
      top: 38,
      right: 10,
    },
    completed: {
      color: secondary_blush,
      fontSize: 11,
      position: "absolute",
      right: 10,
      top: 30,
    },
    yellow: {
      backgroundColor: webinar_block_img_bg,
    },
    yellow1: {
      backgroundColor: tertiary_mustard,
    },
    indigo: {
      backgroundColor: class_block_img_bg,
    },
    dot: {
      height: 5,
      width: 5,
      borderRadius: 3,
      backgroundColor: secondary_blush,
    },
    strike: {
      height: 2,
      width: "100%",
      backgroundColor: secondary_blush,
    },
    complete: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      top: 36,
      left: 0,
      width: "95%",
      zIndex: 99,
    },
  };
});
