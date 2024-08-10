import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      border: { Filter },
      background: { section_bg },
    },
    transparent: { thirty },
  } = theme;

  return {
    dropContainer: {
      backgroundColor: section_bg,
      borderRadius: 12,
      padding: 12,
      paddingVertical: 20,
      minWidth: 110,
    },
    dropdownView: {
      borderRadius: 6,
      height: 26,
      width: 26,
      marginBottom: 16,
      backgroundColor: thirty,
      alignItems: "center",
    },
    filterTextSelect: {
      display: "none",
    },
    filterText: {
      display: "none",
    },

    borderSelect: {
      borderColor: Filter,
    },
  };
});
