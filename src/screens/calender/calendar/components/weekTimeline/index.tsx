import { TextView } from "@common/components/textView";
import React from "react";
import { Box, Spacer } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type WeekCardProps = {
  index: number;
  timeStart?: string;
  timeEnd?: string;
  onPress?: () => void;
};
const WeekTimeline: React.FC<WeekCardProps> = ({
  index,
  timeStart,
  timeEnd,
}) => {
  const { styles } = useStyles({});
  return (
    <Box style={styles.container}>
      <Box style={styles.leftTime}>
        {index == 1 ? (
          <TextView style={styles.start}>{`${timeStart} -`}</TextView>
        ) : (
          <Spacer pt={8} />
        )}
        <Box style={styles.line} />
        <TextView style={styles.end}>{`${timeEnd} -`}</TextView>
      </Box>
    </Box>
  );
};

export default WeekTimeline;
