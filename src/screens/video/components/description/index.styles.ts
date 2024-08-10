import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary, secondary },
      border: { Filter },
    },
  } = theme;

  return {
    mainTitle: {
      color: primary,
      fontSize: 20,
      fontWeight: "500",
      textAlign: "left",
    },
    descTitle: {
      fontSize: 14,
      textAlign: "left",
      color: secondary,
      marginVertical: 10,
      lineHeight: 18,
    },
    otherDetails: {
      fontSize: 14,
      color: secondary,
      marginBottom: 10,
      textAlign: "left",
    },
    share: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 4,
      height: 36,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: Filter,
    },
    shareText: {
      color: primary,
      fontSize: 14,
      marginLeft: 8,
    },
    download: {
      height: 36,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: Filter,
    },
    other: {
      fontSize: 20,
      color: primary,
      marginTop: 20,
      fontWeight: "500",
      textAlign: "left",
    },
  };
});
