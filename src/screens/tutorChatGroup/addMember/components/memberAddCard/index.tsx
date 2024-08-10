import { IconView } from "@common/components/Icon";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

interface recordingProps {
  image?: ImageSourcePropType;
  onPress?: () => void;
}
const MemberAddCard: React.FC<recordingProps> = ({ image, onPress }) => {
  const { styles, theme } = useStyles({});
  return (
    <Box mr={4}>
      <Image style={styles.profileImg as ImageStyle} source={image} />
      <TouchableOpacity onPress={onPress} style={styles.delete}>
        <IconView
          size={20}
          name="remove"
          color={theme.palette.background.section_bg}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default MemberAddCard;
