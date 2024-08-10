import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    transparent,
    palette: {
      background: { section_bg },
      text: { secondary },
    },
  } = theme;

  return {
    cardImg: { height: 250, width: "100%" },
    imgSize: { height: "100%", width: "100%" },
    cardDuration: {
      position: "absolute",
      zIndex: 99,
      bottom: 20,
      right: 20,
      backgroundColor: transparent.thirty,
      borderRadius: 10,
    },
    duration: { color: section_bg, fontSize: 14 },
    cardBottom: { flexDirection: "row", justifyContent: "space-between" },
    title: {
      color: secondary,
      fontSize: 16,
      fontWeight: "500",
    },
    time: {
      color: secondary,
      fontSize: 14,
      fontWeight: "400",
    },
    moreInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 2,
    },
    name: {
      color: secondary,
      fontSize: 14,
      fontWeight: "400",
    },
    date: {
      color: secondary,
      fontSize: 14,
      fontWeight: "400",
    },
    share: { position: "absolute", right: 20, zIndex: 99, top: 20 },
  };
});
