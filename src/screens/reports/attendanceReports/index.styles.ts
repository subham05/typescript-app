import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return {
    containList: {
      paddingHorizontal: 18,
      paddingBottom: 40,
    },
    listHeading: { fontSize: 20 },
    filterDate: {
      borderRadius: 10,
      backgroundColor: section_bg,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 34,
      paddingHorizontal: 10,
    },
    row: { paddingTop: 28, paddingBottom: 12, alignItems: "center" },
    filterText: {
      fontSize: 12,
      marginRight: 6,
    },
  };
});
