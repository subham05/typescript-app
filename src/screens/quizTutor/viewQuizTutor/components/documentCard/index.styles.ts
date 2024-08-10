import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  download: {
    height: 65,
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.palette.border.Attachment_field,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 18,
    paddingLeft: 37,
  },
  downloadText: {
    fontSize: 16,
    width: "70%",
    marginLeft: 20,
  },
  bar: {
    position: "absolute",
    height: 30,
    width: 5,
    borderRadius: 2,
    left: -2,
    backgroundColor: theme.palette.border.Filter,
  },
}));
