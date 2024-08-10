import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "@screens/forgotPassword";
import Login from "@screens/login";
import LoginOption from "@screens/loginOption";
import React from "react";

export type AuthStackParamList = {
  Login: { type: string };
  ForgotPassword: undefined;
  LoginOption: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="LoginOption" component={LoginOption} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
