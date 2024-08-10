import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type TimeCardProps = {
  subject: string;
  startTime: string;
  endTime: string;
  presentHour: string;
};
const TimeCard: React.FC<TimeCardProps> = ({
  subject,
  startTime,
  endTime,
  presentHour,
}) => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { primary_indigo, secondary_blush, cambridge_blue },
    },
  } = theme;
  return (
    <HStack justify="between">
      <HStack spacing={8} style={styles.center}>
        <Box style={styles.line} />
        <TextView variant="light">{subject}</TextView>
      </HStack>
      <HStack spacing={8}>
        <HStack spacing={5} style={styles.center}>
          <IconView name="login" color={primary_indigo} size={16} />
          <TextView style={styles.textStyle} variant="light">
            {startTime}
          </TextView>
        </HStack>
        <HStack style={styles.center}>
          <IconView name="logout1" color={secondary_blush} size={16} />
          <TextView style={styles.textStyle} variant="light">
            {endTime}
          </TextView>
        </HStack>
        <HStack style={styles.center}>
          <IconView name="time" color={cambridge_blue} size={16} />
          <TextView style={styles.textStyle} variant="light">
            {presentHour}
          </TextView>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default TimeCard;
