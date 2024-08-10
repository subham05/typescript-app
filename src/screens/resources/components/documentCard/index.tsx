import { TextView } from "@common/components/textView";
import useScreenDimensions from "@common/utils/responsiveDimensions";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

type recordingProps = {
  title?: string;
  thumbnail?: ImageSourcePropType;
  time?: string;
  name?: string;
  date?: string;
  icon?: ImageSourcePropType;
  onPress?: () => void;
  onShare?: () => void;
};
const DocumentCard: React.FC<recordingProps> = ({
  title,
  thumbnail,
  time,
  name,
  date,
  icon,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { width } = useScreenDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: width / 1.6 }]}
    >
      <Box style={styles.top}>
        <Image style={styles.imageStyle as ImageStyle} source={thumbnail} />
      </Box>
      <Box style={styles.bottom}>
        <Flex pt={10} ph={16} direction="row" justify="between">
          <Box style={styles.titlePart}>
            <Image style={styles.iconStyle as ImageStyle} source={icon} />
            <TextView style={styles.titleStyle} variant="medium">
              {title}
            </TextView>
          </Box>
          <TextView style={styles.timeStyle} variant="light">
            {time}
          </TextView>
        </Flex>
        <Flex pt={4} ph={16} pb={14} direction="row" justify="between">
          <TextView style={styles.subTitleStyle} variant="light">
            {name}
          </TextView>

          <TextView style={styles.timeStyle} variant="light">
            {date}
          </TextView>
        </Flex>
      </Box>
    </TouchableOpacity>
  );
};

export default DocumentCard;
