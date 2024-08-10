import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.main_screen_bg,
  },
  keyBoardStyle: { flexGrow: 1 },
  center: {
    alignItems: "center",
    marginTop: 27,
  },
  groupImg: {
    height: 125,
    width: 125,
    borderRadius: 48,
    resizeMode: "cover",
  },
  groupTitle: { fontSize: 20, marginTop: 20 },
  subText: {
    fontSize: 12,
    marginTop: 5,
  },

  participants: {
    fontSize: 14,
  },
  containList: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  topCtas: {
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  fixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 9,
    width: "100%",
    backgroundColor: theme.palette.background.section_bg,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 67,
    shadowColor: theme.palette.background.main_screen_bg,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  secondaryBtn: {
    height: 40,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  primaryBtn: {
    height: 40,
    backgroundColor: theme.palette.cta.Filter_border,
    borderRadius: 12,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  secondaryTxt: {
    color: theme.palette.cta.Filter_border,
  },
  primaryTxt: {
    color: theme.palette.background.main_screen_bg,
  },
  disable: {
    display: "none",
  },
}));
