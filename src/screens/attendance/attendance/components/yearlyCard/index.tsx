import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type CardProp = {
  month: string;
  hour?: string;
  present?: string;
  percentage: number;
  onPress?: () => void;
};
const YearlyCard: React.FC<CardProp> = ({
  month,
  hour,
  present,
  percentage,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <TextView variant="light" style={styles.monthStyle}>
        {month}
      </TextView>
      <Box>
        <HStack style={styles.row}>
          <Box style={styles.dot} />
          <TextView variant="light" style={styles.subTitle}>
            {t("attendanceCalendarPage:totalHrs")}
          </TextView>
          <TextView variant="light" style={styles.value}>
            {hour}
          </TextView>
        </HStack>
        <HStack style={styles.row}>
          <Box
            style={[
              styles.good,
              percentage < 70 && styles.average,
              percentage < 30 && styles.bad,
            ]}
          />
          <TextView variant="light" style={styles.subTitle}>
            {t("attendanceCalendarPage:presentHrs")}
          </TextView>
          <TextView variant="light" style={styles.value}>
            {present}
          </TextView>
        </HStack>
      </Box>
      <Box>
        <TextView style={styles.monthStyle} variant="medium">
          {percentage}%
        </TextView>
        <Box style={styles.bar}>
          <Box
            style={[
              styles.width,
              percentage < 70 && styles.average,
              percentage < 30 && styles.bad,
              { width: `${percentage}%` },
            ]}
          />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default YearlyCard;
