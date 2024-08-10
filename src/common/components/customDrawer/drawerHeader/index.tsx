import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, TouchableOpacity } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { DrawerItemNavigationProp } from "../drawerItem/menuItemHook";
import { useNavigation } from "@react-navigation/native";

type PrimaryButtonProps = {
  title?: string;
  image?: ImageProps;
};

export const DrawerHeader: React.FC<PrimaryButtonProps> = ({
  title,
  image,
}) => {
  const { styles } = useStyles({});
  const navigation = useNavigation<DrawerItemNavigationProp>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Flex direction="row" justify="between" style={styles.bg}>
        <Flex direction="row" style={styles.content}>
          <Image style={styles.img as ImageProps} source={image} />
          <TextView variant="bold" style={styles.name}>
            {title}
          </TextView>
        </Flex>
        <Box style={styles.adjust}>
          <IconView name="arrow_right_1" />
        </Box>
      </Flex>
    </TouchableOpacity>
  );
};
