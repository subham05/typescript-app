import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => ({
  containList: {
    paddingHorizontal: 18,
    paddingBottom: 40,
  },
  listHeading: { fontSize: 20, paddingTop: 28, paddingBottom: 12 },
  fit: { width: "20%", fontSize: 14 },
  fit1: { width: "20%", textAlign: "right", fontSize: 14 },
}));
