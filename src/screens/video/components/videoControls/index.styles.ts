import { themeStyles } from "@common/theme";
import { Dimensions, I18nManager } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: { text, background },
    transparent: { thirty, fifty },
  } = theme;

  return {
    bufferBar: {
      height: 2,
      width: "100%",
      backgroundColor: text.Tertiary_disaibled_searchbar_other,
    },
    bufferFill: {
      height: 2,
      backgroundColor: text.secondary,
    },
    controlContainer: { width: "100%" },
    heightFull: {
      height: "100%",
    },
    heightSmall: {
      height: 300,
    },
    videoStyle: {
      width: "100%",
      backgroundColor: text.primary,
    },
    videoStyle1: {
      height: "100%",
    },
    videoStyle2: {
      height: 113,
    },
    videoStyle3: {
      height: 300,
    },
    loader: {
      opacity: 1,
      position: "absolute",
      width: "100%",
      top: 130,
      zIndex: 9,
    },
    controlShow: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: thirty,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99,
    },
    middle: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    playPause: {
      marginHorizontal: 20,
    },
    durationContain: {
      position: "absolute",
      flexDirection: "row",
      left: 16,
    },
    durationContain1: {
      bottom: 30,
    },
    durationContain2: {
      bottom: 16,
    },
    white: { color: background.section_bg },
    fullBtn: {
      justifyContent: "center",
      position: "absolute",
      right: 10,
      height: 32,
      width: 32,
      alignItems: "center",
    },
    bottom: {
      bottom: 10,
    },
    bottom1: {
      bottom: 30,
    },
    infoBtn: {
      justifyContent: "center",
      position: "absolute",
      right: 10,
      height: 32,
      width: 32,
      alignItems: "center",
    },
    infoTop: {
      top: 10,
    },
    infoTop1: {
      top: 20,
    },
    barContain: { zIndex: 99, alignSelf: "center" },
    barWidth1: {
      top: -8,
      width: "100%",
    },
    barWidth: {
      top: 0,
      width: "100%",
    },
    sliderMain: {
      width: screenWidth + 10,
      height: 10,
      alignSelf: "center",
      zIndex: 9999,
      left: -10,
      top: -7,
    },
    blank: {
      height: 12,
    },
    playback: {
      height: 36,
      width: 36,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: fifty,
      borderRadius: 8,
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    play: {
      marginHorizontal: 16,
      height: 48,
      width: 48,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: fifty,
      borderRadius: 10,
    },
  };
});
