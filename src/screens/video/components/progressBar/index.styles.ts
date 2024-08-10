import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { Tertiary_disaibled_searchbar_other, secondary, primary },
      background: { section_bg },
    },
    transparent: { thirty, fifty, black50 },
  } = theme;
  return {
    bufferBar: {
      height: 4,
      top: 7,
      width: "100%",
      backgroundColor: Tertiary_disaibled_searchbar_other,
    },
    bufferFill: {
      height: 4,
      backgroundColor: secondary,
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
      backgroundColor: primary,
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
      left: 10,
    },
    durationContain1: {
      bottom: 30,
    },
    durationContain2: {
      bottom: 16,
    },
    white: { color: section_bg },
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
    barContain: {
      zIndex: 9999,
      alignSelf: "center",
    },
    barWidth1: {
      top: -80,
      width: "100%",
      paddingHorizontal: 16,
    },
    barWidth: {
      top: -8,
      width: "100%",
    },
    sliderMain: {
      width: "100%",
      height: 10,
      alignSelf: "center",
      zIndex: 9999,
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
    thumbCta: {
      height: 12,
      width: 12,
      borderRadius: 20,
      backgroundColor: theme.palette.decorative.error_red,
    },
    mark: {
      height: 12,
      width: 6,
      backgroundColor: black50,
      borderRadius: 4,
    },
  };
});
