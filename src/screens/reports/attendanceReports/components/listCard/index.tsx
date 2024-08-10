import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type AttendanceProps = {
  subject: string;
  percentage: number;
  totalDays?: number;
  presentDays?: number;
  absentDays?: number;
};
const AttendanceCard: React.FC<AttendanceProps> = ({
  subject,
  percentage,
  totalDays,
  presentDays,
  absentDays,
}) => {
  const { styles } = useStyles({});
  return (
    <Box style={styles.card}>
      <Box
        style={[
          styles.percentageBox,
          percentage <= 60 && styles.average,
          percentage <= 40 && styles.bad,
        ]}
      >
        <TextView variant="medium" style={styles.percentText}>
          {percentage}%
        </TextView>
      </Box>
      <TextView variant="medium" style={styles.title}>
        {subject}
      </TextView>
      <HStack spacing={15}>
        <Box>
          <TextView variant="light" style={styles.subHeading}>
            Total days
          </TextView>
          <TextView variant="medium" style={styles.totalText}>
            {totalDays}
          </TextView>
        </Box>
        <Box>
          <TextView variant="light" style={styles.subHeading}>
            Present days
          </TextView>
          <TextView variant="medium" style={styles.presentText}>
            {presentDays}
          </TextView>
        </Box>
        <Box>
          <TextView variant="light" style={styles.subHeading}>
            Absent days
          </TextView>
          <TextView variant="medium" style={styles.absentText}>
            {absentDays}
          </TextView>
        </Box>
      </HStack>
    </Box>
  );
};

export default AttendanceCard;
