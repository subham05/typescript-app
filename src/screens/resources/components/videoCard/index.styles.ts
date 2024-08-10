import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  top: {
    borderRadius: 28,
    overflow: "hidden",
    height: 136,
  },
  imageStyle: { width: "100%", height: "100%" },
  titlePart: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: { height: 15, width: 15, resizeMode: "contain" },
  titleStyle: { fontSize: 14 },
  timeStyle: {
    fontSize: 10,
    color: theme.palette.text.Tertiary_disaibled_searchbar_other,
  },
  subTitleStyle: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  shareStyle: {
    position: "absolute",
    zIndex: 99,
    top: 16,
    right: 18,
    backgroundColor: theme.transparent.thirty,
    padding: 4,
    borderRadius: 6,
  },
  durationStyle: {
    position: "absolute",
    zIndex: 99,
    bottom: 16,
    right: 18,
    backgroundColor: theme.transparent.thirty,
    borderRadius: 6,
  },
  durationText: {
    fontSize: 12,
    color: theme.palette.background.section_bg,
  },
}));
