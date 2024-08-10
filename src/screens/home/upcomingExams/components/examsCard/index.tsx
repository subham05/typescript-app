import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type ExamCardProps = {
  title?: string;
  date?: string;
  timeRange?: string;
  subject?: string;
  examType?: string;
  totalMarks?: string;
  passingMarks?: string;
  details?: string;
  onPress: () => void;
};
const ExamsCard: React.FC<ExamCardProps> = ({
  title,
  date,
  timeRange,
  subject,
  examType,
  totalMarks,
  passingMarks,
  details,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <VStack style={styles.card}>
      <TextView variant="medium" style={styles.head}>
        <TextView style={styles.dot}>• </TextView>
        {title}
      </TextView>
      <TextView style={styles.time}>
        {date} • {timeRange}
      </TextView>
      <HStack>
        <HStack style={styles.half} pt={38} pb={28}>
          <IconView name="note1" size={24} />
          <Box pl={18}>
            <TextView style={styles.titleHead}>
              {t("upcomingExamsPage:subject")}
            </TextView>
            <TextView style={styles.info}>{subject}</TextView>
          </Box>
        </HStack>
        <HStack style={styles.half} pt={38} pb={28}>
          <IconView name="note" size={24} />
          <Box pl={18}>
            <TextView style={styles.titleHead}>
              {t("upcomingExamsPage:examType")}
            </TextView>
            <TextView style={styles.info}>{examType}</TextView>
          </Box>
        </HStack>
      </HStack>
      <HStack pb={28}>
        <HStack style={styles.half}>
          <IconView name="star_filled" size={24} />
          <Box pl={18}>
            <TextView style={styles.titleHead}>
              {t("upcomingExamsPage:totalMarks")}
            </TextView>
            <TextView style={styles.info}>{totalMarks}</TextView>
          </Box>
        </HStack>
        <HStack style={styles.half}>
          <IconView name="star_half" size={24} />
          <Box pl={18}>
            <TextView style={styles.titleHead}>
              {t("upcomingExamsPage:passingMarks")}
            </TextView>
            <TextView style={styles.info}>{passingMarks}</TextView>
          </Box>
        </HStack>
      </HStack>

      <HStack pb={32}>
        <IconView name="menu" size={24} />
        <Box pl={18}>
          <TextView style={styles.titleHead}>
            {t("upcomingExamsPage:additionalDetails")}
          </TextView>
          <TextView style={styles.info}>{details}</TextView>
        </Box>
      </HStack>
      <PrimaryButton
        width={103}
        title={t("common:joinNow")}
        style={styles.join}
        onPress={onPress}
      />
    </VStack>
  );
};

export default ExamsCard;
