import React from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
export type ExamHeaderProps = {
  name?: string;
  grade?: string;
  roll?: string;
  studentId?: string;
  totalMarks?: string;
  result?: string;
  remark?: string;
};
const ExamHeader: React.FC<ExamHeaderProps> = ({
  name,
  grade,
  roll,
  studentId,
  totalMarks,
  result,
  remark,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();

  return (
    <Box style={styles.card}>
      <VStack spacing={40}>
        <Box>
          <TextView style={styles.title}>{t("examPage:studentName")}</TextView>
          <TextView style={styles.content}>{name}</TextView>
        </Box>
        <HStack justify="between">
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:grade")}</TextView>
            <TextView style={styles.content}>{grade}</TextView>
          </Box>
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:rollNo")}</TextView>
            <TextView style={styles.content}>{roll}</TextView>
          </Box>
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:studentId")}</TextView>
            <TextView style={styles.content}>{studentId}</TextView>
          </Box>
        </HStack>
        <HStack justify="between">
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:totalMarks")}</TextView>
            <TextView style={styles.content} variant="medium">
              {totalMarks}
            </TextView>
          </Box>
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:result")}</TextView>
            <TextView style={styles.content} variant="medium">
              {result}
            </TextView>
          </Box>
          <Box style={styles.thirty}>
            <TextView style={styles.title}>{t("examPage:remark")}</TextView>
            <TextView style={styles.content} variant="medium">
              {remark}
            </TextView>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ExamHeader;
