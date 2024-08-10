import { themeStyles } from "@common/theme";
import { Dimensions } from "react-native";

export const useStyles = themeStyles.create(() => ({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  backButton: { marginTop: 10, paddingLeft: 10 },
  pdfView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
}));
