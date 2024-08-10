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
    paddingHorizontal: 20,
  },
  groupImg: {
    height: 125,
    width: 125,
    borderRadius: 48,
    resizeMode: "cover",
    backgroundColor: theme.palette.background.week_section_bg,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 27,
  },
  customInput: {
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: 20,
    height: 40,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.border.Text_fields,
  },
  cta: {
    height: 52,
    width: 52,
    backgroundColor: theme.palette.cta.Filter_border,
    borderRadius: 10,
    position: "absolute",
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
}));
