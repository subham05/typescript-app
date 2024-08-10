import { IconButton } from "@common/components/IconButton";
import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import { Flex, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

interface recordingProps {
  name: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
}
const GroupCard: React.FC<recordingProps> = ({ name, image }) => {
  const { styles } = useStyles({});
  return (
    <Flex direction="row" justify="between" style={styles.left}>
      <Flex direction="row" style={styles.left}>
        <Image style={styles.profileImg as ImageStyle} source={image} />
        <TextView style={styles.names} variant="medium">
          {name}
        </TextView>
      </Flex>
      <HStack spacing={20}>
        <IconButton size={24} name="message" />
        <IconButton size={24} name="delete" />
      </HStack>
    </Flex>
  );
};

export default GroupCard;
