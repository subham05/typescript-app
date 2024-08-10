import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  chatName: {
    fontSize: 18,
    marginBottom: 4,
    textAlign: "left",
  },
  messageName: {
    fontSize: 14,
    maxWidth: 250,
    textAlign: "left",
  },
  typing: {
    color: theme.palette.decorative.primary_indigo,
  },
  notTyping: {
    color: theme.palette.text.secondary,
  },
  time: {
    fontSize: 14,

    marginVertical: 7,
  },
  timeShow: {
    color: theme.palette.decorative.primary_indigo,
  },
  timeNormal: { color: theme.palette.text.secondary },
  pill: {
    height: 24,
    width: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.cta.Filter_border,
    marginLeft: 18,
  },
  count: {
    color: theme.palette.background.section_bg,
    fontSize: 14,
  },
  imgSize: {
    height: 58,
    width: 58,
    resizeMode: "cover",
    borderRadius: 18,
  },
  online: {
    backgroundColor: theme.palette.decorative.quaternary_green,
    height: 11,
    width: 11,
    borderRadius: 10,
    position: "absolute",
    zIndex: 99,
    right: 0,
    bottom: 0,
  },
}));
