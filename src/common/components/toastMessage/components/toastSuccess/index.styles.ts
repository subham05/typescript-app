import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary },
      decorative: { primary_indigo },
      background: { section_bg },
    },
  } = theme;
  return {
    toastContainer: {
      height: 50,
      backgroundColor: section_bg,
      borderLeftWidth: 3,
      borderRadius: 10,
      borderLeftColor: primary_indigo,
      marginHorizontal: 50,
      justifyContent: "center",
      shadowColor: primary,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      zIndex: 9999,
      elevation: 10,
    },
    toastText: { color: primary, paddingHorizontal: 15, fontSize: 16 },
  };
});
