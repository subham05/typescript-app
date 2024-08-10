import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary },
      decorative: { primary_indigo },
      border: { Filter },
    },
  } = theme;

  return {
    keyBoardContainer: {
      flexGrow: 1,
    },
    topCtas: {
      paddingTop: 10,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    container: { paddingTop: 110, paddingBottom: 200 },
    filterText: {
      marginRight: 6,
      fontSize: 14,
      color: primary,
    },

    courseFilter: {
      marginRight: 10,
    },

    filterScroll: {
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    resourceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    resourceHead: {
      fontSize: 18,
      marginBottom: 2,
    },
    all: {
      color: primary_indigo,
      fontSize: 14,
    },
    filterRecording: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Filter,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 30,
      paddingHorizontal: 10,
    },
  };
});
