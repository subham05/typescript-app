import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineBold: {
    marginTop: 8,
    marginRight: 8,
    height: 40,
    width: 3,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: theme.palette.decorative.primary_indigo,
  },
  leftTime: {
    width: "18%",
    height: 70,
  },
  start: { color: theme.palette.text.secondary, fontSize: 12 },
  end: {
    color: theme.palette.text.secondary,
    fontSize: 12,
    marginTop: 56,
  },
  right: {
    width: "82%",
    flexDirection: "row",
    alignItems: "center",
  },
  cardInner: {
    overflow: "hidden",
    backgroundColor: theme.palette.decorative.class_block_bg,
    height: 68,
    marginTop: 4,
    flexGrow: 1,
    alignItems: "center",
    borderRadius: 20,
  },
  join: {
    backgroundColor: theme.palette.decorative.primary_indigo,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 28,
    minWidth: 60,
  },
  joinText: {
    color: theme.palette.cta.Filter_bg,
    fontSize: 10,
  },
  subject: {
    maxWidth: "80%",
    fontSize: 14,
    marginBottom: 4,
    textAlign: "left",
  },
  times: {
    fontSize: 10,
    color: theme.palette.text.secondary,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    width: "65%",
  },
  imgCard: {
    height: 40,
    width: 40,
    borderRadius: 30,
    resizeMode: "cover",
  },
  joinAt: {
    fontSize: 10,
  },
  changeColor: {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  line: {
    backgroundColor: theme.palette.border.Attachment_field,
    height: 2,
    width: 15,
    position: "absolute",
    top: 38,
    right: 10,
  },
  completed: {
    color: theme.palette.decorative.secondary_blush,
    fontSize: 11,
    position: "absolute",
    right: 10,
    top: 30,
  },
  yellow: {
    backgroundColor: theme.palette.decorative.webinar_block_img_bg,
  },
  yellow1: {
    backgroundColor: theme.palette.decorative.tertiary_mustard,
  },
  indigo: {
    backgroundColor: theme.palette.decorative.class_block_img_bg,
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 3,
    backgroundColor: theme.palette.decorative.secondary_blush,
  },
  strike: {
    height: 2,
    width: "100%",
    backgroundColor: theme.palette.decorative.secondary_blush,
  },
  complete: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 36,
    left: 0,
    width: "95%",
    zIndex: 99,
  },
}));
