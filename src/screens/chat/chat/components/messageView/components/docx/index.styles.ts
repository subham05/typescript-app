import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  docxView: {
    paddingTop: 3,
    backgroundColor: theme.palette.background.section_bg,
    borderRadius: 12,
    padding: 10,
  },
  excelIcon: { height: 20, width: 20, marginRight: 10, resizeMode: "contain" },
  wordFileName: {
    fontSize: 14,
  },
  receiverFileSize: { color: theme.palette.text.secondary, fontSize: 12 },
  dot: {
    height: 3,
    width: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.text.secondary,
  },
  top: {
    alignItems: "center",
    marginTop: 10,
  },
  bottom: {
    alignItems: "center",
    marginTop: 6,
  },
}));
