import React from "react";
import { FlatList, LayoutChangeEvent } from "react-native";
import { Spacer, Stack } from "react-native-flex-layout";
import MessageView from "../messageView";
import { useStyles } from "./index.styles";
import { coordinatesProps, messageModal } from "../../types";

interface MessagesListModal {
  messages: messageModal[];
  setXCoordinates?: (value: coordinatesProps) => void;
  xCoordinate?: coordinatesProps[];
  type?: string;
  headerHeight?: number;
  selectedMsg?: messageModal;
  setSelectedMsg: (val: messageModal | undefined) => void;
  setSelectedMsgIndex: (val: number | undefined) => void;
  onEndReached?: () => void;
  onMessageSelect?: (message: messageModal) => void;
}
const MessagesList: React.FC<MessagesListModal> = ({
  messages,
  setXCoordinates,
  xCoordinate,
  type,
  headerHeight,
  selectedMsg,
  setSelectedMsg,
  setSelectedMsgIndex,
  onEndReached,
  onMessageSelect,
}) => {
  const { styles } = useStyles({});
  return (
    <FlatList
      data={messages}
      contentContainerStyle={styles.flatListStyle}
      inverted
      onEndReached={onEndReached}
      ItemSeparatorComponent={() => <Spacer pb={26} />}
      renderItem={({ item, index }) => {
        const onLayout = (event: LayoutChangeEvent) => {
          const { x, y, height } = event.nativeEvent.layout;
          // xCoordinate.push({x: x, y: y, height: height});
          setXCoordinates?.({ x, y, height });
        };
        return (
          <Stack key={index.toString()} onLayout={onLayout}>
            <MessageView
              currentMessage={item}
              type={type}
              coordinates={xCoordinate![index]}
              headerHeight={headerHeight}
              isMsgSelected={selectedMsg?._id === item._id ? true : false}
              setSelectedMsg={setSelectedMsg}
              setSelectedMsgIndex={setSelectedMsgIndex}
              completeMessages={messages}
              index={index}
              onMessageSelect={onMessageSelect}
            />
          </Stack>
        );
      }}
    />
  );
};
export default MessagesList;
