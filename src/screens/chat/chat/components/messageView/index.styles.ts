import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { class_block_bg, primary_indigo },
      background: { section_bg },
    },
  } = theme;

  return {
    bubble: {
      maxWidth: "60%",
    },
    bubbleRight: {
      alignSelf: "flex-end",
      alignItems: "flex-end",
    },
    leftMessage: {
      backgroundColor: class_block_bg,
      padding: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    leftMessageText: {
      fontSize: 16,
    },
    rightMessage: {
      backgroundColor: primary_indigo,
      padding: 10,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 0,
      alignSelf: "flex-end",
    },
    rightMessageText: {
      fontSize: 16,
      color: section_bg,
    },
    bubble1: {
      alignItems: "flex-end",
      maxWidth: "50%",
      marginVertical: 8,
    },
    avatar: {
      height: 48,
      width: 48,
      borderRadius: 18,
      resizeMode: "cover",
      marginRight: 8,
    },
    messageImage: {
      height: 89,
      width: 89,
      borderRadius: 10,
      resizeMode: "cover",
    },
  };
});
