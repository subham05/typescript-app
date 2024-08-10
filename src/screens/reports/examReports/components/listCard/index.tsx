import React from "react";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
export type ExamProps = {
  subject?: string;
  marksObtain?: string;
  totalMarks?: string;
  percentage?: string;
  result?: string;
  onPress?: () => void;
};
const ExamCard: React.FC<ExamProps> = ({
  subject,
  marksObtain,
  totalMarks,
  percentage,
  result,
}) => {
  const { styles } = useStyles({});
  return (
    <Box pv={10} style={styles.card}>
      <TextView style={styles.fit}>{subject}</TextView>
      <TextView style={styles.fit2}>{marksObtain}</TextView>
      <TextView style={styles.fit2}>{totalMarks}</TextView>
      <TextView style={styles.fit1} variant="medium">
        {percentage}
      </TextView>
      <TextView style={styles.fit1} variant="medium">
        {result}
      </TextView>
    </Box>
  );
};

export default ExamCard;
