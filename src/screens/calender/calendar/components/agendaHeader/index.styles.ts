import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      decorative: { primary_indigo },
      text: { secondary },
    },
  } = theme;

  return {
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
  };
});
