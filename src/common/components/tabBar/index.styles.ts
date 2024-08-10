import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(({ theme }) => ({
  tabBackground: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.section_bg,
    height: 70,
    alignItems: "center",
    paddingHorizontal: 24,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  animatedStyle: {
    height: 40,
    backgroundColor: theme.palette.background.main_screen_bg,
    position: "absolute",
    bottom: _isIOS ? 18 : 14,
    borderRadius: 10,
  },
  iconText: {
    fontSize: 10,
    marginRight: 8,
    color: theme.palette.icon.Active_bottomnavbar,
    bottom: _isIOS ? 4 : 0,
  },
  iconStyle: {
    bottom: _isIOS ? 4 : 0,
  },
}));
