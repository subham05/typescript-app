import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Filter },
      text: { primary },
    },
  } = theme;
  return {
    containList: {
      paddingTop: 70,
      paddingHorizontal: 20,
      paddingBottom: 180,
    },
    fab: {
      position: "absolute",
      bottom: 60,
      right: 20,
      zIndex: 99,
      width: 106,
      elevation: 10,
    },
    filterScroll: {
      flexDirection: "row",
      paddingHorizontal: 20,
      marginTop: 10,
      alignSelf: "flex-end",
    },
    courseFilter: {
      marginRight: 10,
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
    filterText: {
      marginRight: 6,
      fontSize: 14,
      color: primary,
    },
  };
});
