import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return {
    card: {
      backgroundColor: section_bg,
      padding: 20,
      borderRadius: 16,
      flexGrow: 1,
      paddingBottom: _isIOS ? 100 : 20,
    },
    saveStyle: {
      alignSelf: "flex-end",
    },
    name: { fontSize: 16, textAlign: "left" },
    subTitle: {
      textAlign: "left",
      fontSize: 14,
      color: theme.palette.text.secondary,
      marginTop: 3,
      marginBottom: 18,
    },
  };
});
