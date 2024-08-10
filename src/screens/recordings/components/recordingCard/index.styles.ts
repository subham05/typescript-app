import { themeStyles } from "@common/theme";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    transparent,
    palette: {
      background: { section_bg },
      text: { secondary },
    },
  } = theme;
  const { width } = useScreenDimensions();
  return {
    cardImg: {
      height: 230,
      width: "100%",
      borderRadius: 32,
      overflow: "hidden",
    },
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
      fontSize: 18,
    },
    time: {
      color: secondary,
      fontSize: 14,
    },
    moreInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 2,
    },
    name: {
      color: secondary,
      fontSize: 14,
    },
    date: {
      color: secondary,
      fontSize: 14,
    },
    dropdown: {
      height: 115,
      width: 137,
      borderRadius: 12,
      backgroundColor: section_bg,
      position: "absolute",
      right: 20,
      top: 50,
      zIndex: 999,
    },
    filter: {
      position: "absolute",
      right: 20,
      zIndex: 99,
      top: 20,
    },
    customDropStyle: {
      width: 137,
      borderRadius: 12,
      right: 20,
      left: width - 178,
      height: 90,
      justifyContent: "center",
    },
  };
});
