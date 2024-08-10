import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { secondary },
      decorative: { primary_indigo },
      background: { week_section_bg },
      border: { Text_fields },
    },
  } = theme;
  return {
    listContain: {
      paddingHorizontal: 20,
      paddingBottom: 100,
    },
    subtitle: {
      fontSize: 16,
      color: secondary,
      marginBottom: 6,
    },
    values: {
      fontSize: 16,
    },
    groupImg: {
      height: 148,
      width: 148,
      borderRadius: 100,
      resizeMode: "cover",
    },
    name: {
      color: primary_indigo,
      fontSize: 20,
      marginTop: 14,
      textAlign: "center",
      marginBottom: 55,
    },
    profileContain: {
      height: 148,
      width: 148,
      alignSelf: "center",
    },
    edit: {
      height: 42,
      width: 42,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      bottom: 0,
      backgroundColor: week_section_bg,
    },
    card: {
      paddingHorizontal: 25,
      paddingVertical: 22,
      borderRadius: 16,
      borderWidth: 0.5,
      borderColor: Text_fields,
    },
    textCard: {
      fontSize: 16,
    },
  };
});
