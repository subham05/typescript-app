import { themeStyles } from "@common/theme";
import useScreenDimensions from "@common/utils/responsiveDimensions";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    transparent,
    palette: {
      background: { section_bg },
    },
  } = theme;
  const { width } = useScreenDimensions();
  return {
    cardImg: {
      height: 260,
      width: "100%",
      borderRadius: 32,
      overflow: "hidden",
    },
    imgSize: { height: "100%", width: "100%" },
    cardDuration: {
      position: "absolute",
      zIndex: 99,
      top: 20,
      left: 20,
      backgroundColor: transparent.thirty,
      borderRadius: 10,
    },
    duration: { color: section_bg, fontSize: 14 },
    cardBottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 4,
    },
    title: {
      fontSize: 18,
      color: section_bg,
    },
    moreInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 2,
    },
    name: {
      color: section_bg,
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
    cardOverlap: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      left: 0,
      backgroundColor: transparent.thirty,
    },
  };
});
