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
  search: {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.border.Text_fields,
  },
  participants: {
    fontSize: 14,
  },
  containList: {
    paddingTop: 23,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
}));
