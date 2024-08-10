import React from "react";
import { Image, ImageStyle, TouchableOpacity, View } from "react-native";
import { useStyles } from "./index.styles";
import { HStack, Stack } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { previewXlsx } from "@common/utils/xlsDownload";
import { messageModal } from "@screens/chat/chat/types";

interface DocxMessageViewProps {
  currentMessage: messageModal;
  onLongPress?: () => void;
}
export const DocxMessageView: React.FC<DocxMessageViewProps> = ({
  currentMessage,
  onLongPress,
}) => {
  const { styles, theme } = useStyles({});
  const isXls =
    currentMessage.attachmentUrlDetails?.url
      ?.split(".")
      .pop()
      ?.toLowerCase() === "xls" ||
    currentMessage.attachmentUrlDetails?.url
      ?.split(".")
      .pop()
      ?.toLowerCase() === "xlsx";
  return (
    <Stack style={styles.docxView} pv={10} mt={3}>
      <TouchableOpacity
        onPress={() => {
          previewXlsx(currentMessage.attachmentUrlDetails?.url);
        }}
        onLongPress={onLongPress}
      >
        <Stack style={styles.top}>
          <HStack spacing={6}>
            {isXls ? (
              <Image
                source={imageSources.xslImg}
                style={styles.excelIcon as ImageStyle}
              />
            ) : (
              <IconView
                name="file"
                size={24}
                color={theme.palette.decorative.primary_indigo}
              />
            )}

            <TextView style={styles.wordFileName} numberOfLines={1}>
              {/* {decodeURIComponent(currentMessage?.attachmentUrlDetails?).split('/').pop()} */}
              {currentMessage?.attachmentUrlDetails?.messageFileExt
                ? `file.${currentMessage?.attachmentUrlDetails?.messageFileExt}`
                : `file.unknown`}
            </TextView>
          </HStack>
        </Stack>
        <HStack spacing={6} style={styles.bottom} pl={4}>
          <TextView variant="light" style={styles.receiverFileSize}>
            {currentMessage.size}
          </TextView>
          <View style={styles.dot} />
          <TextView variant="light" style={styles.receiverFileSize}>
            {currentMessage.attachmentUrlDetails?.messageFileExt}
          </TextView>
        </HStack>
      </TouchableOpacity>
    </Stack>
  );
};
