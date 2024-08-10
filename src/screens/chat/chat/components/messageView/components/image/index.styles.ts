import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(({ theme }) => ({
  receiverImage: {
    height: 90,
    width: 90,
    borderTopLeftRadius: 6,
    borderRadius: 12,
  },
  senderImage: {
    height: 90,
    width: 90,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: theme.palette.decorative.primary_indigo,
    paddingBottom: 50,
  },
}));
