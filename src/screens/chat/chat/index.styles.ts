import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Text_fields },
    },
  } = theme;

  return {
    containerStyle: {
      flex: 1,
    },
    line: {
      height: 1,
      backgroundColor: Text_fields,
    },
  };
});
