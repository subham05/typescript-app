import { themeStyles } from "@common/theme";
import { FontFamilyEnum } from "../textView/enum";
import { I18nManager } from "react-native";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { Tertiary_disaibled_searchbar_other, secondary, primary },
      decorative: { error_red },
      border: { Text_fields },
    },
  } = theme;
  return {
    textFieldWrap: {
      borderBottomWidth: 1,
      alignItems: "center",
      borderBottomColor: Text_fields,
      flexDirection: "row",
    },
    textStyle: {
      fontSize: 16,
      color: secondary,
      textAlign: "left",
    },
    errorText: {
      color: error_red,
      fontSize: 12,
      marginTop: 4,
    },
    errorInput: {
      borderBottomColor: error_red,
    },
    dropdown: {
      width: "100%",
    },
    full: {
      width: "100%",
      minHeight: 40,
      marginBottom: 10,
      justifyContent: "center",
    },
    placeholderStyle: {
      color: Tertiary_disaibled_searchbar_other,
      fontFamily: FontFamilyEnum.light,
      fontSize: 16,
      textAlign: "left",
    },
    item: {
      padding: 10,
    },
    selectedTextStyle: {
      fontSize: 14,
      textAlign: "left",
    },
    selectedStyle: {
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      borderColor: Text_fields,
      marginTop: 8,
      marginRight: 6,
    },
    textSelectedStyle: {
      paddingRight: I18nManager.isRTL ? 0 : 10,
      paddingLeft: I18nManager.isRTL ? 10 : 0,
    },
    selectedStyleItem: {
      backgroundColor: Tertiary_disaibled_searchbar_other,
    },
    contain: {
      borderRadius: 18,
      padding: 10,
    },
    inputSearchStyle: {
      borderRadius: 12,
      color: primary,
    },
    hidden: { opacity: 0 },
    custom: { position: "absolute", top: 0 },
  };
});
