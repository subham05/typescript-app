import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
    },
  } = theme;

  return {
    line: {
      height: 12,
      width: 3,
      borderRadius: 4,
      backgroundColor: primary_indigo,
    },
    center: {
      alignItems: "center",
    },
    textStyle: {
      paddingLeft: 5,
    },
  };
});
