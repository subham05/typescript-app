import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type VideoCardProps = {
  thumbnail?: ImageProps;
  duration: string;
  title: string;
  time: string;
  uploadedBy: string;
  uploadedTime?: string;
};
const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  duration,
  title,
  time,
  uploadedBy,
  uploadedTime,
}) => {
  const { styles, theme } = useStyles({});
  return (
    <Box>
      <Box style={styles.cardImg}>
        <Image style={styles.imgSize as ImageStyle} source={thumbnail} />
        <TouchableOpacity style={styles.share}>
          <IconView
            name="share"
            color={theme.palette.cta.Filter_bg}
            size={28}
          />
        </TouchableOpacity>
        <Box pv={8} ph={12} style={styles.cardDuration}>
          <TextView style={styles.duration}>{duration}</TextView>
        </Box>
      </Box>
      <Box pv={10} ph={20}>
        <Box style={styles.cardBottom}>
          <TextView style={styles.title}>{title}</TextView>
          <TextView style={styles.time}>{time}</TextView>
        </Box>
        <Box style={styles.moreInfo}>
          <TextView style={styles.name}>{uploadedBy}</TextView>
          <TextView style={styles.date}>{uploadedTime}</TextView>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCard;
