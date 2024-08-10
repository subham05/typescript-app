import { IconView } from "@common/components/Icon";
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

type videoProps = {
  title?: string;
  thumbnail?: ImageSourcePropType;
  time?: string;
  name?: string;
  date?: string;
  duration?: string;
  onPress?: () => void;
  onShare?: () => void;
};
const VideoCard: React.FC<videoProps> = ({
  title,
  thumbnail,
  time,
  name,
  date,
  duration,
  onPress,
}) => {
  const { styles, theme } = useStyles({});
  const { width } = useScreenDimensions();
  return (
    <TouchableOpacity onPress={onPress} style={{ width: width / 1.8 }}>
      <Box style={styles.top}>
        <Image style={styles.imageStyle as ImageStyle} source={thumbnail} />
        <TouchableOpacity style={styles.shareStyle}>
          <IconView
            name="share"
            size={24}
            color={theme.palette.cta.Filter_bg}
          />
        </TouchableOpacity>
        <Box style={styles.durationStyle} ph={6} pv={3}>
          <TextView style={styles.durationText} variant="light">
            {duration}
          </TextView>
        </Box>
      </Box>
      <Flex pt={10} ph={9} direction="row" justify="between">
        <TextView style={styles.titleStyle} variant="medium">
          {title}
        </TextView>

        <TextView style={styles.timeStyle} variant="light">
          {time}
        </TextView>
      </Flex>
      <Flex pt={4} ph={9} direction="row" justify="between">
        <TextView style={styles.subTitleStyle} variant="light">
          {name}
        </TextView>

        <TextView style={styles.timeStyle} variant="light">
          {date}
        </TextView>
      </Flex>
    </TouchableOpacity>
  );
};

export default VideoCard;
