import React from "react";
import { Image, ImageStyle, TouchableOpacity, View } from "react-native";
import { useStyles } from "./index.styles";
import { HStack, Stack } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import { TextView } from "@common/components/textView";
import { useNavigation } from "@react-navigation/native";
import { messageModal } from "@screens/chat/chat/types";

interface DocxMessageViewProps {
  currentMessage: messageModal;
  onLongPress?: () => void;
}
export const PdfMessageView: React.FC<DocxMessageViewProps> = ({
  currentMessage,
  onLongPress,
}) => {
  const { styles } = useStyles({});
  const navigation = useNavigation();
  return (
    <Stack style={styles.docxView} pv={10} mt={3}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Pdf" as never);
        }}
        onLongPress={onLongPress}
      >
        <Stack style={styles.top}>
          <HStack spacing={6}>
            <Image
              source={imageSources.pdfImg}
              style={styles.excelIcon as ImageStyle}
            />
            <TextView style={styles.wordFileName} numberOfLines={1}>
              {/* {decodeURIComponent(currentMessage?.attachmentUrlDetails?).split('/').pop()} */}
              {`file.${currentMessage?.attachmentUrlDetails.messageFileExt}`}
            </TextView>
          </HStack>
        </Stack>
        <HStack spacing={6} style={styles.bottom} pl={4}>
          <TextView variant="light" style={styles.receiverFileSize}>
            {currentMessage.size}
          </TextView>
          <View style={styles.dot} />
          <TextView variant="light" style={styles.receiverFileSize}>
            PDF
          </TextView>
        </HStack>
      </TouchableOpacity>
    </Stack>
  );
};
