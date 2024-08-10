import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  btn: {
    height: 137,
    width: "100%",
    borderRadius: 32,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  btnImgContain: {
    height: 90,
    width: "30%",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  ctaHeading: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: theme.transparent.black50,
  },
  btnImg: {
    height: "100%",
    width: "100%",

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
  rightBox: { width: "60%", alignItems: "center" },
}));
