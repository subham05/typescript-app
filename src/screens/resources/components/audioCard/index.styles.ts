import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  musicContainer: {
    backgroundColor: theme.palette.background.section_bg,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowStyle: {
      shadowColor: theme.palette.text.primary,
      shadowOffset: {
        width: 0,
        height: 2.4296157360076904,
      },
      shadowOpacity: 0.14,
      shadowRadius: 14.5776948928833,
    },
  },
  iconContain: {
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: theme.palette.background.main_screen_bg,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  audioName: {
    color: theme.palette.text.primary,
    fontSize: 12,
  },
  info: {
    fontSize: 10,
    color: theme.palette.text.Tertiary_disaibled_searchbar_other,
  },
}));
