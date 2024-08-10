import { TextView } from "@common/components/textView";

import moment from "moment";
import React from "react";
import { Image, ImageStyle } from "react-native";
import { Box, HStack, Stack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { DateView } from "../dateView";
import { DateTimeFormats } from "@common/utils/dateFormat/dateTimeFormats";
import { ImageMessageView } from "./components/image";
import { DocxMessageView } from "./components/docx";
import { PdfMessageView } from "./components/pdf";
import { coordinatesProps, messageModal } from "../../types";

type MessageViewProps = {
  currentMessage: messageModal;
  type: string | undefined;
  coordinates: coordinatesProps;
  headerHeight: number | undefined;
  isMsgSelected?: boolean;
  setSelectedMsg: (val: messageModal | undefined) => void;
  setSelectedMsgIndex: (val: number | undefined) => void;
  completeMessages: messageModal[];
  index: number;
  onMessageSelect?: (message: messageModal) => void;
};

const MessageView: React.FC<MessageViewProps> = ({
  currentMessage,
  //   type,
  //   isMsgSelected,
  //   setSelectedMsg,
  //   setSelectedMsgIndex,
  completeMessages,
  index,
  //   onMessageSelect,
}) => {
  const { styles } = useStyles({});
  const {
    isOwn,
    isAttachment,
    message,
    updatedAt,
    // messageType,
    // isDeleted,
    senderProfile,
    senderName,
    attachmentUrlDetails,
  } = currentMessage;
  const { type } = attachmentUrlDetails;
  const receiverUser = !isOwn;

  const RenderMessageType = () => {
    switch (type) {
      case "png":
      case "jpeg":
      case "jpg":
      case "gif":
      case "heic":
        return (
          <ImageMessageView
            currentMessage={currentMessage}
            type={type}
            // onLongPress={selectOnLongPress}
          />
        );
      case "pdf":
        return (
          <PdfMessageView
            currentMessage={currentMessage}
            // onLongPress={selectOnLongPress}
          />
        );
      case "docx":
      case "xls":
      case "xlsx":
        return (
          <DocxMessageView
            currentMessage={currentMessage}
            // onLongPress={selectOnLongPress}
          />
        );
      default:
    }
  };

  const RenderDate = () => {
    if (
      (index + 1 !== completeMessages.length &&
        completeMessages[index].formattedDate !==
          completeMessages[index + 1].formattedDate) ||
      completeMessages.length === index + 1
    ) {
      const todaysDate = new Date();
      let day = currentMessage.formattedDate;
      if (
        moment(todaysDate).format(DateTimeFormats.MonthSingleDateYear) ===
        currentMessage.formattedDate
      ) {
        day = "Today";
      } else if (
        moment(todaysDate)
          .subtract(1, "day")
          .format(DateTimeFormats.MonthSingleDateYear) ===
        currentMessage.formattedDate
      ) {
        day = "Yesterday";
      }
      return <DateView day={day} />;
    }
    return null;
  };
  return (
    <Box>
      <RenderDate />
      <Stack style={receiverUser ? styles.bubble : styles.bubbleRight}>
        {receiverUser ? (
          <HStack style={styles.bubble} spacing={10}>
            {senderProfile && (
              <Image
                style={styles.avatar as ImageStyle}
                source={senderProfile}
              />
            )}

            <Box>
              <HStack>
                <TextView variant="light">{senderName}, </TextView>
                <TextView variant="light">
                  {moment(updatedAt).format("hh:mm A")}
                </TextView>
              </HStack>
              <Stack>
                {isAttachment ? (
                  <RenderMessageType />
                ) : (
                  <Box mt={3} style={styles.leftMessage}>
                    <TextView style={styles.leftMessageText} variant="light">
                      {message}
                    </TextView>
                  </Box>
                )}
              </Stack>
            </Box>
          </HStack>
        ) : (
          <Stack style={styles.bubble1}>
            <HStack justify="end">
              <TextView variant="light">
                {moment(updatedAt).format("hh:mm A")}
              </TextView>
            </HStack>
            <HStack>
              {isAttachment ? (
                <RenderMessageType />
              ) : (
                <Box mt={3} style={styles.rightMessage}>
                  <TextView style={styles.rightMessageText}>{message}</TextView>
                </Box>
              )}
            </HStack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
export default MessageView;
