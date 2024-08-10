import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return {
    container: {
      backgroundColor: section_bg,
      marginHorizontal: 11,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 120,
    },
    daysContainer: {
      height: 100,
      paddingLeft: 8,
      marginBottom: 10,
      paddingRight: 20,
      alignItems: "center",
    },
    contain: { flex: 1 },
    wrapper: { paddingBottom: 10 },
  };
});
