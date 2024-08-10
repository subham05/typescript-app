import { themeStyles } from "@common/theme";
export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: { text, background },
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
    heightFull: { height: "100%" },
    heightSmall: { height: 300 },
    videoStyle: {
      width: "100%",
      backgroundColor: text.primary,
    },
    videoStyle1: { height: "100%" },
    videoStyle2: { height: "100%" },
    videoStyle3: { height: 300 },
    loader: {
      opacity: 1,
      position: "absolute",
      width: "100%",
      top: 130,
      zIndex: 9,
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
    bottom: { bottom: 10 },
    bottom1: { bottom: 30 },
    infoTop1: { top: 20 },
    barContain: { zIndex: 99, alignSelf: "center" },
    barWidth1: { top: -8, width: "100%" },
    barWidth: { top: 0, width: "100%" },
    blank: { height: 14 },
  };
});
