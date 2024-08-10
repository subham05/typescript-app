import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";
import { Flex } from "react-native-flex-layout";
import CheckBox from "../checkBox";
import { useStyles } from "./index.styles";

interface recordingProps {
  name: string;
  image?: ImageSourcePropType;
  selected?: boolean;
  onPress?: () => void;
}
const MemberCard: React.FC<recordingProps> = ({
  name,
  image,
  selected,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <Flex direction="row" justify="between" style={styles.card}>
      <Flex direction="row" style={styles.left}>
        <Image style={styles.profileImg as ImageStyle} source={image} />
        <TextView style={styles.names} variant="medium">
          {name}
        </TextView>
      </Flex>
      <CheckBox onPress={onPress} check={selected} />
    </Flex>
  );
};

export default MemberCard;
