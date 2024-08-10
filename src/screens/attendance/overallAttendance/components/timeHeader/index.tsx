import React from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
import { IconView } from "@common/components/Icon";
type TimeHeaderProps = {
  date?: string;
  timeRange?: string;
  totalHour?: string;
  presentHour?: string;
};
const TimeHeader: React.FC<TimeHeaderProps> = ({
  date,
  timeRange,
  totalHour,
  presentHour,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box>
      <TextView variant="light" style={styles.dateStyle}>
        {date} • {timeRange}
      </TextView>
      <HStack justify="between">
        <HStack>
          <IconView name="timer" size={24} />
          <Box pl={26}>
            <TextView variant="light" style={styles.valueStyle}>
              {t("overallAttendancePage:totalHrs")}
            </TextView>
            <TextView variant="light">{totalHour}</TextView>
          </Box>
        </HStack>
        <HStack>
          <IconView name="timer" size={24} />
          <Box pl={26}>
            <TextView variant="light" style={styles.valueStyle}>
              {t("overallAttendancePage:presentHrs")}
            </TextView>
            <TextView variant="light">{presentHour}</TextView>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default TimeHeader;
