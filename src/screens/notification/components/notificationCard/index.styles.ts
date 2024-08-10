import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Filter },
      text: { secondary },
      cta: { Primary_default },
    },
  } = theme;

  return {
    card: {
      flexDirection: "row",
      paddingVertical: 10,
    },
    imgSize: {
      height: 58,
      width: 58,
      resizeMode: "cover",
      borderRadius: 20,
    },
    btn: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: Filter,
      width: 110,
      marginTop: 10,
      marginBottom: 0,
    },
    btnText: {
      color: Primary_default,
    },
    messageStyle: {
      fontSize: 16,
      lineHeight: 22,
      textAlign: "left",
    },
    timing: {
      color: secondary,
      paddingTop: 3,
      fontSize: 14,
      textAlign: "left",
    },
    right: { width: "85%", paddingLeft: 16 },
  };
});
