import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  container: {
    borderRadius: 28,
    backgroundColor: theme.palette.background.section_bg,
    overflow: "hidden",
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
  top: {
    height: 173,
  },
  imageStyle: { width: "100%", height: "100%" },
  titlePart: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: { height: 15, width: 15, resizeMode: "contain" },
  titleStyle: { paddingLeft: 6, fontSize: 14 },
  timeStyle: {
    fontSize: 10,
    color: theme.palette.text.Tertiary_disaibled_searchbar_other,
  },
  subTitleStyle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  bottom: {
    backgroundColor: theme.palette.background.section_bg,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    zIndex: 99,
  },
}));
