import MyTabBar from "@common/components/tabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calender from "@screens/calender/calendar";
import Chat from "@screens/chat/chatList";
import Home from "@screens/home/home";
import Homework from "@screens/homework/homework";
import CoursesHourly from "@screens/myCourses/coursesHourly";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { useAppSelector } from "src/store/hooks";

export type BottomTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Homework: undefined;
  Chat: undefined;
  MyCourses: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation = () => {
  const dynamicWidthRef = useRef<TouchableOpacity>(null);
  const authContextState = useAppSelector((state) => state.authReducer);
  const { signType } = authContextState;
  const PRIVATE = "private";
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => (
        <MyTabBar {...props} dynamicWidthRef={dynamicWidthRef} />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calender}
        options={{
          tabBarLabel: "Calendar",
        }}
      />
      {signType === PRIVATE ? (
        <Tab.Screen
          name="MyCourses"
          component={CoursesHourly}
          options={{
            tabBarLabel: "MyCourses",
          }}
        />
      ) : (
        <Tab.Screen
          name="Homework"
          component={Homework}
          options={{
            tabBarLabel: "Homework",
          }}
        />
      )}

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
        }}
      />
    </Tab.Navigator>
  );
};
