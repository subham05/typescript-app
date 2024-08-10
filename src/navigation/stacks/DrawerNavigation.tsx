import CustomDrawer from "@common/components/customDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Dimensions } from "react-native";
import { BottomTabNavigation } from "./MainTabNavigation";

export type DrawerNavParamList = {
  TabBar: undefined;
};

const Drawer = createDrawerNavigator();
export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      backBehavior="order"
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          width: Dimensions.get("window").width - 60,
          backgroundColor: "white",
        },
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="TabBar" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};
