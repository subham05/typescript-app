import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  btn: {
    height: 152,
    width: "100%",
    borderRadius: 24,
    justifyContent: "center",
    paddingLeft: 16,
  },
  btnImgContain: {
    backgroundColor: theme.palette.background.main_screen_bg,
    height: 65,
    width: 65,
    marginTop: -50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaHeading: {
    fontSize: 12,
    color: theme.palette.background.section_bg,
    textAlign: "left",
  },
  btnImg: {
    height: 55,
    width: 55,
    objectFit: "contain",
  },
  value: {
    fontSize: 20,
    textAlign: "left",
    color: theme.palette.background.section_bg,
    marginVertical: 10,
  },
  cta: {
    backgroundColor: theme.transparent.ten,
    borderRadius: 9,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
}));
