import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  card: {
    backgroundColor: theme.palette.background.section_bg,
    borderRadius: 18,
    flexDirection: "row",
  },
  subject: {
    fontSize: 16,
    marginBottom: 4,
    lineHeight: 20,
    textAlign: "left",
  },
  dateComplete: {
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  right: {
    width: "90%",
    paddingLeft: 18,
  },
}));
