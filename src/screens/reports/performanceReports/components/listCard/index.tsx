import { TextView } from "@common/components/textView";
import React from "react";
import { Box, Flex } from "react-native-flex-layout";
import SVGComponents from "src/assets/svg";
import { useStyles } from "./index.styles";
export type PerformanceProps = {
  subject?: string;
  remark?: string;
  date?: string;
  grade?: string;
  onPress?: () => void;
};
const PerformanceCard: React.FC<PerformanceProps> = ({
  subject,
  remark,
  date,
  grade,
}) => {
  const { styles } = useStyles({});
  return (
    <Box ph={14} pv={20} style={styles.card}>
      <Flex direction="row" style={styles.leftSide}>
        <Box style={styles.img}>
          <SVGComponents.SubjectImg />
        </Box>
        <Box style={styles.infoBox}>
          <Flex pb={4} pt={4}>
            <TextView variant="light" style={styles.subject}>
              {subject}
            </TextView>
          </Flex>

          <TextView style={styles.session}>{remark}</TextView>

          <TextView variant="light" style={styles.date}>
            {date}
          </TextView>
        </Box>
      </Flex>
      <Box style={styles.boxGrade}>
        <TextView
          variant="black"
          style={[
            styles.textGrade,
            grade === "A" && styles.good,
            grade === "B" && styles.average,
            grade === "C" && styles.bad,
          ]}
        >
          {grade}
        </TextView>
      </Box>
    </Box>
  );
};

export default PerformanceCard;
