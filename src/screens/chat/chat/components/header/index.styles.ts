import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary, secondary },
    },
  } = theme;

  return {
    head: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    innerBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    headText: {
      color: primary,
      fontSize: 18,
    },
    profileImage: {
      height: 52,
      width: 52,
      borderRadius: 16,
    },
    participantText: {
      color: secondary,
      fontSize: 14,
      marginTop: 3,
    },
  };
});
