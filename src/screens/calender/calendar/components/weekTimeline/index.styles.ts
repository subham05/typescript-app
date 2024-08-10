import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
      text: { secondary },
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
      height: 70,
    },
    start: { color: secondary, fontSize: 12 },
    end: {
      color: secondary,
      fontSize: 12,
      marginTop: 56,
    },

    line: {
      backgroundColor: Attachment_field,
      height: 2,
      width: 15,
      position: "absolute",
      top: 38,
      right: 10,
    },
  };
});
