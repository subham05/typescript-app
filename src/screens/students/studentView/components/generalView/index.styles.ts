import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { secondary },
    },
  } = theme;

  return {
    profileBig: {
      height: 134,
      width: 134,
      resizeMode: "cover",
      borderRadius: 80,
    },
    subtitle: {
      fontSize: 16,
      color: secondary,
      marginBottom: 6,
      textAlign: "left",
    },
    values: {
      fontSize: 16,
      textAlign: "left",
    },
    nameCustom: {
      width: "50%",
    },
  };
});
