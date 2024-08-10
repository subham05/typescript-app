import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Filter },
      cta: { Filter_bg },
      text: { primary },
    },
  } = theme;

  return {
    containList: {
      paddingHorizontal: 18,
      paddingBottom: 150,
      paddingTop: 110,
    },
    filter: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Filter,
      backgroundColor: Filter_bg,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 28,
      alignSelf: "flex-end",
      paddingHorizontal: 10,
      marginRight: 18,
      marginBottom: 20,
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
      marginBottom: 20,
    },
    filterScroll: {
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    filterText: {
      marginRight: 6,
      fontSize: 14,
      color: primary,
    },
    courseFilter: {
      marginRight: 10,
    },
    subjectFilter: { marginRight: 10 },
  };
});
