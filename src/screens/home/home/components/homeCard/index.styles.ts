import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  btn: {
    height: 137,
    width: "100%",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImgContain: {
    backgroundColor: theme.palette.background.main_screen_bg,
    height: 65,
    width: 65,
    marginTop: -50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    zIndex: 20,
    marginLeft: 50,
  },
  ctaHeading: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
    paddingHorizontal: 20,
    color: theme.transparent.black50,
  },
  btnImg: {
    height: 55,
    width: 55,

    objectFit: "contain",
  },
  cta: {
    backgroundColor: theme.palette.background.section_bg,
    borderRadius: 14,
    height: 22,
    width: 34,
    justifyContent: "center",
    alignItems: "center",
  },
}));
