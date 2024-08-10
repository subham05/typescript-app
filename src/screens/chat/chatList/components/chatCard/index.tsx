import { TextView } from "@common/components/textView";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

interface recordingProps {
  name?: string;
  time?: string;
  message?: string;
  count: number;
  image?: ImageSourcePropType;
  active: boolean;
  onPress?: () => void;
}
const ChatCard: React.FC<recordingProps> = ({
  name,
  time,
  message,
  image,
  count,
  active,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack justify="between">
        <Box style={styles.left}>
          <Box>
            <Image style={styles.imgSize as ImageStyle} source={image} />
            {active && <Box style={styles.online} />}
          </Box>

          <Box pl={14}>
            <TextView variant="medium" style={styles.chatName}>
              {name}
            </TextView>
            <TextView
              style={[
                styles.messageName,
                message == "Typing..." ? styles.typing : styles.notTyping,
              ]}
              numberOfLines={1}
            >
              {message}
            </TextView>
          </Box>
        </Box>
        <Box>
          <TextView
            style={[
              styles.time,
              count > 0 ? styles.timeShow : styles.timeNormal,
            ]}
          >
            {time}
          </TextView>
          {count > 0 && (
            <Box style={styles.pill}>
              <TextView style={styles.count} numberOfLines={1}>
                {count}
              </TextView>
            </Box>
          )}
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};

export default ChatCard;
