import { FontFamilyEnum } from "@common/components/textView/enum";
import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  // Destructure the theme object to access its properties
  const {
    palette: {
      border: { Text_fields, Filter },
      background: { section_bg },
    },
  } = theme;

  return {
    dropContainer: {
      backgroundColor: section_bg,
      borderRadius: 12,
      padding: 12,
      minWidth: 110,
    },
    width: { maxWidth: 70, paddingRight: 6, fontSize: 14, minWidth: 40 },
    dropdownView: {
      borderWidth: 1,
      borderColor: Text_fields,
      paddingHorizontal: 10,
      borderRadius: 10,
      height: 30,
      marginBottom: 16,
    },
    filterTextSelect: {
      display: "none",
    },
    filterText: {
      display: "none",
    },
    heavy: {
      fontFamily: FontFamilyEnum.medium,
    },
    borderSelect: {
      borderColor: Filter,
    },
  };
});
