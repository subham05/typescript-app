import { TextView } from "@common/components/textView";
import FileDownload from "@common/components/fileDownload";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type AnnouncementCardProps = {
  title?: string;
  description?: string;
  linkTitle?: string;
  link?: string;
  poster?: ImageProps | string;
  onPress?: () => void;
  file?: string;
};
const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  description,
  linkTitle,
  link,
  poster,
  onPress,
  file,
}) => {
  const { styles } = useStyles({});
  return (
    <VStack style={styles.card}>
      <TextView variant="medium" style={styles.head}>
        {title}
      </TextView>
      <TextView style={styles.description}>{description}</TextView>
      {link && (
        <>
          <TextView style={styles.linkTop}>{linkTitle} :</TextView>
          <TouchableOpacity onPress={onPress}>
            <TextView variant="medium" style={styles.linkStyle}>
              {link}
            </TextView>
          </TouchableOpacity>
        </>
      )}
      {poster && (
        <Image
          style={styles.posterStyle as ImageStyle}
          source={poster as ImageProps}
        />
      )}
      {file && (
        <Box pt={16}>
          <FileDownload />
        </Box>
      )}
    </VStack>
  );
};

export default AnnouncementCard;
