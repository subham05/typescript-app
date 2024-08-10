import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { For_card_border },
      text: { secondary, disabled_for_mobile },
    },
  } = theme;

  return {
    cardContain: {
      borderWidth: 0.5,
      borderColor: For_card_border,
      width: "100%",
      minHeight: 100,
      alignItems: "center",
      paddingTop: 10,
    },
    dayText: {
      fontSize: 12,
      marginBottom: 4,
    },
    more: {
      color: secondary,
      fontSize: 10,
      textAlign: "center",
    },
    faded: {
      color: disabled_for_mobile,
    },
  };
});
