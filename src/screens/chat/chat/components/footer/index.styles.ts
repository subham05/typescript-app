import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
      text: { primary },
    },
  } = theme;

  return {
    inputStyle: {
      backgroundColor: section_bg,
      width: "90%",
      color: primary,
      borderRadius: 16,
      paddingHorizontal: 16,
      height: 50,
    },
    footerContainer: {
      paddingHorizontal: 12,
      alignItems: "center",
      justifyContent: "space-between",
    },
    sendButton: {
      height: 24,
      width: 24,
    },
    leftTextView: {
      width: "100%",
      backgroundColor: section_bg,
      borderRadius: 16,
      flexDirection: "row",
      alignItems: "center",
    },
  };
});
