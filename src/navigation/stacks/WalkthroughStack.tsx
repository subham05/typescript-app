import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectLanguage from "@screens/selectLanguage";
import React from "react";

export type WalkthroughStackParamList = {
  SelectLanguage: undefined;
};

const Stack = createNativeStackNavigator<WalkthroughStackParamList>();
export const WalkthroughStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
    </Stack.Navigator>
  );
};
