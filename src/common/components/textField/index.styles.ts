import { themeStyles } from "@common/theme";
import { FontFamilyEnum } from "../textView/enum";
import { I18nManager } from "react-native";

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
    textAlign: I18nManager.isRTL ? "right" : "left",
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
  },
  errorText: {
    color: theme.palette.decorative.error_red,
    fontSize: 12,
    marginTop: 4,
  },
  errorInput: {
    borderBottomColor: theme.palette.decorative.error_red,
  },
}));
