import { themeStyles } from "@common/theme";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Filter },
      cta: { Filter_bg },
      text: { primary },
    },
  } = theme;
  const { width } = useScreenDimensions();
  return {
    containList: {
      paddingTop: 70,
      paddingHorizontal: 18,
      paddingBottom: 250,
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
      marginRight: 10,
      marginBottom: 20,
    },
    recording: {
      alignSelf: "flex-end",
      marginRight: 8,
    },
    filterText: {
      marginRight: 6,
      fontSize: 14,
      color: primary,
    },
    subjectFilter: { marginRight: 10 },
    custom: {
      width: 110,
      borderRadius: 12,
      right: 0,
      left: width - 130,
      padding: 10,
    },
    fab: {
      position: "absolute",
      bottom: 90,
      right: 20,
      zIndex: 99,
      width: 150,
      elevation: 10,
    },
  };
});
