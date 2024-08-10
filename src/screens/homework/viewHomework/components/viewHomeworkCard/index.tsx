import React, { useState } from "react";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
import { TouchableOpacity } from "react-native";
import { IconView } from "@common/components/Icon";
type ViewHomeworkProps = {
  title?: string;
  subtitle?: string;
  index?: number;
};
const ViewHomeworkCard: React.FC<ViewHomeworkProps> = ({
  title,
  subtitle = "",
  index,
}) => {
  const { styles } = useStyles({});
  const [show, setShow] = useState(false);
  return (
    <Flex direction="row">
      <IconView
        name={index === 1 ? "note" : index === 2 ? "note1" : "menu"}
        size={24}
      />
      <Box ph={16}>
        <TextView style={styles.detailsHead}>{title}</TextView>
        <TextView style={styles.detailsSub}>
          {subtitle?.length > 200 && !show
            ? subtitle?.substring(0, 200)
            : subtitle}
        </TextView>
        {index == 3 && subtitle?.length > 200 && (
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={styles.moreBtn}
          >
            <TextView style={styles.more}>
              {show ? "View less" : "View more..."}
            </TextView>
          </TouchableOpacity>
        )}
      </Box>
    </Flex>
  );
};

export default ViewHomeworkCard;
