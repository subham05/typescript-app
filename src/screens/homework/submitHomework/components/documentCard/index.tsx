import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import SVGComponents from "src/assets/svg";
import { useStyles } from "./index.styles";
type FileProps = {
  fileUrl?: string | null;
  onPress: () => void;
};

const DocumentCard: React.FC<FileProps> = ({ fileUrl, onPress }) => {
  const { styles } = useStyles({});

  return (
    <Box style={styles.download}>
      <Box style={styles.bar} />
      <Flex direction="row" items="center">
        <SVGComponents.Doc />
        <TextView
          variant="medium"
          numberOfLines={1}
          style={styles.downloadText}
        >
          {fileUrl}
        </TextView>
      </Flex>
      <TouchableOpacity onPress={onPress}>
        <IconView size={24} name="remove" />
      </TouchableOpacity>
    </Box>
  );
};

export default DocumentCard;
