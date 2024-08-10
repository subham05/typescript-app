import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      background: { main_screen_bg, section_bg },
      text: { disabled_for_mobile, secondary },
      decorative: { primary_indigo },
    },
  } = theme;

  return {
    container: {
      paddingBottom: 100,
      backgroundColor: main_screen_bg,
    },
    date: {
      color: disabled_for_mobile,
      fontSize: 18,
    },
    name: {
      fontSize: 28,
      color: primary_indigo,
    },
    profile: {
      height: 40,
      width: 40,
      objectFit: "cover",
      borderRadius: 40,
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
    topCtas: {
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    btnText: {
      textAlign: "center",
      marginTop: 6,
      fontSize: 12,
      color: secondary,
    },
    agendaHead: {
      fontSize: 18,
      marginBottom: 2,
      textAlign: "left",
    },
    agendaSub: {
      fontSize: 12,
      color: secondary,
      textAlign: "left",
    },
    agendaContain: {
      backgroundColor: section_bg,
      borderRadius: 20,
    },
  };
});
