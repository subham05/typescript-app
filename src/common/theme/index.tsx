import { createStyleSheet } from "@dyst/native";
import lightTheme from "./themeCollection/light";

// Initialization of a StyleSheet instance called 'styleSheet'
export const themeStyles = createStyleSheet({
  ...lightTheme,
});
