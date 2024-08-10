import React from "react";
import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { View } from "react-native";

import { useStyles } from "./index.styles";
import { IconView } from "@common/components/Icon";

const TabIcon: React.FC<{
  label:
    | string
    | ((props: {
        focused: boolean;
        color: string;
        position: LabelPosition;
        children: string;
      }) => React.ReactNode);
  isFocused: boolean;
  iconActive: string;
}> = ({ label, isFocused, iconActive }) => {
  const { styles } = useStyles({});
  switch (label) {
    case "Home":
      return (
        <View style={styles.padding}>
          <IconView
            color={iconActive}
            name={isFocused ? "home_filled" : "home_01"}
            size={24}
          />
        </View>
      );
    case "Calendar":
      return (
        <View style={styles.padding}>
          <IconView
            color={iconActive}
            name={isFocused ? "calendar_filled" : "calendar"}
            size={24}
          />
        </View>
      );
    case "Homework":
      return (
        <View style={styles.padding}>
          <IconView
            color={iconActive}
            name={isFocused ? "homework_filled" : "homework"}
            size={24}
          />
        </View>
      );
    case "MyCourses":
      return (
        <View style={styles.padding}>
          <IconView
            color={iconActive}
            name={isFocused ? "courses_filled" : "courses"}
            size={24}
          />
        </View>
      );
    case "Chat":
      return (
        <View style={styles.padding}>
          <IconView
            color={iconActive}
            name={isFocused ? "chat_filled" : "chat"}
            size={24}
          />
        </View>
      );
    default:
      return null; // Handle other cases if necessary
  }
};
export default TabIcon;
