import { themeStyles } from "@common/theme";
import { FontFamilyEnum } from "../textView/enum";

export const useStyles = themeStyles.create(({ theme }) => ({
  input: {
    minHeight: 40,

    paddingVertical: 6,
    paddingHorizontal: 0,
    marginBottom: 10,
    fontSize: 16,
    flexDirection: "row",
    flexGrow: 1,
    fontFamily: FontFamilyEnum.light,
    color: theme.palette.text.primary,
  },
  textStyle: {
    fontSize: 16,
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  focusedInput: {
    borderBottomColor: theme.palette.decorative.primary_indigo,
  },
  textFieldWrap: {
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: theme.palette.border.Text_fields,
    minHeight: 40,
    paddingTop: 8,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  errorText: {
    color: theme.palette.decorative.error_red,
    fontSize: 12,
    marginTop: 4,
  },
  errorInput: {
    borderBottomColor: theme.palette.decorative.error_red,
  },
  dateText: { fontSize: 16 },
  btnTime: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.palette.border.Filter,
    height: 36,
  },
  btnText: {
    color: theme.palette.border.Filter,
    fontSize: 16,
  },
}));
