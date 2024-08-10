import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import useScreenDimensions from "@common/utils/responsiveDimensions";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

type audioProps = {
  title?: string;
  time?: string;
  date?: string;
  size?: string;
  duration?: string;
  onPress?: () => void;
  onShare?: () => void;
};
const AudioCard: React.FC<audioProps> = ({
  title,
  size,
  date,
  duration,
  onPress,
}) => {
  const { styles, theme } = useStyles({});
  const { width } = useScreenDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.musicContainer, { width: width / 1.4 }]}
    >
      <Box style={styles.left}>
        <Box style={styles.iconContain}>
          <IconView
            name="audio"
            size={20}
            color={theme.palette.decorative.primary_indigo}
          />
        </Box>
        <Box pl={11}>
          <TextView style={styles.audioName} variant="light">
            {title}
          </TextView>
          <HStack spacing={10} pt={3}>
            <TextView style={styles.info} variant="light">
              {size}
            </TextView>
            <TextView style={styles.info} variant="light">
              {date}
            </TextView>
            <TextView style={styles.info} variant="light">
              {duration}
            </TextView>
          </HStack>
        </Box>
      </Box>
      <TouchableOpacity>
        <IconView name="share" size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AudioCard;
