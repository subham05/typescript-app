import { TextView } from "@common/components/textView";
import React from "react";
import { useStyles } from "./index.styles";
import { Box, Flex } from "react-native-flex-layout";

type recordingProps = {
  index?: number;
  name?: string;
  color?: string;
  bgColor?: string;
};
const DayMonthClassCard: React.FC<recordingProps> = ({
  name,
  color,
  bgColor,
}) => {
  const { styles } = useStyles({});
  return (
    <Flex direction="row" style={[styles.card, { backgroundColor: bgColor }]}>
      <Box style={[styles.line, { backgroundColor: color }]}></Box>
      <TextView numberOfLines={1} style={styles.text}>
        {name}
      </TextView>
    </Flex>
  );
};

export default DayMonthClassCard;
