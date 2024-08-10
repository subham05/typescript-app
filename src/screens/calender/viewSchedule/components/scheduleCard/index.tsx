import React, { useState } from "react";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
import { TouchableOpacity } from "react-native";
import { IconView } from "@common/components/Icon";
type ScheduleCardProps = {
  title: string;
  subtitle: string;
  index?: number;
};
const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  subtitle,
  index,
}) => {
  const { styles } = useStyles({});
  const [show, setShow] = useState(false);
  return (
    <Flex direction="row">
      {index == 1 && <IconView name="note" size={24} />}
      {index == 2 && <IconView name="note1" size={24} />}
      {index == 3 && <IconView name="menu" size={24} />}

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

export default ScheduleCard;
