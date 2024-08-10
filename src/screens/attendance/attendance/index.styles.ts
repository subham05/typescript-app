import { themeStyles } from "@common/theme";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
      text: { secondary },
      background: { main_screen_bg },
    },
  } = theme;
  const { width } = useScreenDimensions();
  return {
    container: {
      padding: 20,
    },
    agendaHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    all: {
      color: primary_indigo,
      fontSize: 14,
    },
    agendaHead: {
      fontSize: 18,
      marginBottom: 2,
    },
    agendaSub: {
      fontSize: 12,
      color: secondary,
    },
    calendarChange: {
      flexDirection: "row",
      alignItems: "center",
      height: 34,
    },
    calendarDate: {
      fontSize: 16,
    },
    filter: {
      width: 100,
    },
    contain: {
      paddingTop: 70,
      paddingHorizontal: 20,
      paddingBottom: 150,
      justifyContent: "space-between",
    },
    header: {
      fontSize: 20,
      marginBottom: 12,
      paddingTop: 32,
    },
    columnStyle: { justifyContent: "space-between" },
    dayHeader: {
      color: secondary,
      fontSize: 12,
      width: "14.285%",
      textAlign: "center",
    },
    headerCalendar: { height: 0 },
    bg: {
      padding: 0,
      backgroundColor: main_screen_bg,
      marginHorizontal: -4,
    },
    monthContainer: {
      paddingHorizontal: 16,
    },
    customDropStyle: {
      width: 138,
      borderRadius: 12,
      right: 0,
      left: width - 158,
      paddingVertical: 10,
    },
  };
});
