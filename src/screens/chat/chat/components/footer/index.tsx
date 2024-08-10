import { IconView } from "@common/components/Icon";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type ChatFooterProps = {
  onPressCamera: () => void;
};
const ChatFooter: React.FC<ChatFooterProps> = () => {
  const { styles, theme } = useStyles({});
  return (
    <HStack pb={10} style={styles.footerContainer}>
      <Box style={styles.leftTextView}>
        <TextInput
          style={styles.inputStyle}
          selectionColor={theme.palette.decorative.primary_indigo}
          placeholder={"Type a message"}
          placeholderTextColor={theme.palette.text.disabled_for_mobile}
        />

        <TouchableOpacity>
          <IconView name="sent" size={24} />
        </TouchableOpacity>
      </Box>

      {/* <TouchableOpacity>
        <IconView name="mice" size={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IconView name="attach" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCamera}>
        <IconView name="camera" size={24} />
      </TouchableOpacity> */}
    </HStack>
  );
};
export default ChatFooter;
