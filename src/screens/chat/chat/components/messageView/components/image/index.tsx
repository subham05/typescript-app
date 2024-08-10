import React, { useState } from "react";
import { Image, ImageStyle, TouchableOpacity } from "react-native";

import { Stack } from "react-native-flex-layout";
import ImageView from "react-native-image-viewing";
import { useStyles } from "./index.styles";
import { messageModal } from "@screens/chat/chat/types";

interface ImageMessageViewProps {
  currentMessage: messageModal;
  type: string | undefined;
  onLongPress?: () => void;
}
export const ImageMessageView: React.FC<ImageMessageViewProps> = ({
  currentMessage,
  //   type,
  onLongPress,
}) => {
  const { styles, theme } = useStyles({});
  const receiverUser = !currentMessage.isOwn;

  const [visible, setIsVisible] = useState<boolean>(false);

  const imageData = [];
  imageData?.push({ uri: currentMessage?.attachmentUrlDetails?.url });

  return (
    <Stack pt={3}>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
        }}
        onLongPress={onLongPress}
      >
        <Image
          source={{
            uri:
              currentMessage?.attachmentUrlDetails?.url ||
              currentMessage?.attachmentUrl,
          }}
          style={
            (receiverUser
              ? styles.receiverImage
              : styles.senderImage) as ImageStyle
          }
        />
      </TouchableOpacity>

      <ImageView
        backgroundColor={theme.palette.background.main_screen_bg}
        swipeToCloseEnabled={true}
        keyExtractor={(_, indexKey) => indexKey.toString()}
        images={imageData}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </Stack>
  );
};
