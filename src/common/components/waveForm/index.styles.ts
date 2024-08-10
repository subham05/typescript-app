import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => {
  const {
    palette: {
      text: { primary, Tertiary_disaibled_searchbar_other },
      background: { section_bg },
    },
    transparent: { eighty },
  } = theme;
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: eighty,
    },
    modalBg: {
      backgroundColor: primary,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 40,
      width: "100%",
      borderRadius: 8,
    },
    audioWaveforms: {
      borderRadius: 1,
      borderWidth: 1,
      marginLeft: 2,
      width: 2,
    },
    waveformView: {
      flexDirection: "row",
      position: "relative",
      alignItems: "center",
      marginTop: 32,
    },
    slider: {
      height: 20,
      zIndex: 1,
      width: "100%",
    },
    modalContainer: {
      justifyContent: "center",
    },
    controlStyle: {
      columnGap: 10,
    },
    tile: {
      color: section_bg,
      fontSize: 16,
      textAlign: "center",
      marginBottom: 5,
      paddingHorizontal: 10,
    },
    date: {
      color: Tertiary_disaibled_searchbar_other,
      fontSize: 12,
      textAlign: "center",
      paddingHorizontal: 10,
    },
    time: {
      color: section_bg,
      fontSize: 10,
    },
    waves: {
      alignItems: "center",
    },
    thumbCta: {
      height: 12,
      width: 12,
      borderRadius: 20,
      backgroundColor: theme.palette.decorative.error_red,
    },
  };
});
