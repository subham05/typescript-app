import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
      text: { secondary },
      background: { section_bg, main_screen_bg },
      border: { Text_fields },
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
      width: 85,
    },
    dayCard: {
      height: 84,
      width: 58,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: section_bg,
      borderWidth: 1,
      borderColor: Text_fields,
    },
    daysContainer: {
      height: 100,
      paddingLeft: 8,
      marginBottom: 20,
      paddingRight: 20,
      alignItems: "center",
    },
    date: {
      fontSize: 20,
    },
    day: {
      fontSize: 14,
      color: secondary,
    },
    currentDate: {
      backgroundColor: primary_indigo,
    },
    currentDateText: {
      color: section_bg,
    },
    bottomBox: {
      flex: 1,
      marginBottom: 80,
      backgroundColor: section_bg,
      marginHorizontal: 11,
      borderRadius: 20,
    },
    dayHeader: {
      color: secondary,
      fontSize: 12,
      width: "14.285%",
      textAlign: "center",
    },
    bg: {
      backgroundColor: main_screen_bg,
    },
    header: { height: 0 },
    bottomGap: { marginBottom: 80 },

    bgWeek: {
      backgroundColor: section_bg,
      borderRadius: 12,
      paddingVertical: 20,
      paddingHorizontal: 11,
    },
    bgRow: { flexDirection: "row" },
    weekContainer: { flexGrow: 1, paddingHorizontal: 11, paddingBottom: 100 },
    weekHorizontal: { flexDirection: "row" },
    topWeeks: {
      backgroundColor: main_screen_bg,
      borderRadius: 12,
      padding: 12,
      marginLeft: 60,
      marginBottom: 10,
    },
    customDropStyle: {
      width: 138,
      borderRadius: 12,
      right: 0,
      left: width - 158,
      paddingVertical: 10,
    },
    customList: {
      paddingHorizontal: 17,
      paddingVertical: 8,
    },
    customDropText: {
      fontSize: 14,
      paddingLeft: 6,
    },
    mainContainer: {
      paddingTop: 70,
      paddingBottom: 100,
    },
    fab: {
      position: "absolute",
      bottom: _isIOS ? 170 : 90,
      right: 20,
      zIndex: 99,
      width: 130,
      elevation: 10,
    },
  };
});
