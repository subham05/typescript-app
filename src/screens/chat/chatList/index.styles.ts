import { themeStyles } from "@common/theme";
import { _isIOS } from "@common/utils/platformCheck";

export const useStyles = themeStyles.create(() => ({
  containList: {
    flexGrow: 1,
    paddingTop: 70,
    paddingHorizontal: 18,
    paddingBottom: 200,
  },
  fab: {
    position: "absolute",
    bottom: _isIOS ? 170 : 90,
    right: 20,
    zIndex: 99,
    width: 115,
    elevation: 10,
  },
}));
