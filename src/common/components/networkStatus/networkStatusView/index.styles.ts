import { themeStyles } from "@common/theme";

export const useStyles = themeStyles.create(() => ({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: { padding: 10 },
  headingTop: { fontSize: 24 },
  heading: {
    width: 300,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  paddingStyle: {
    paddingTop: 20,
    paddingLeft: 16,
  },
}));
