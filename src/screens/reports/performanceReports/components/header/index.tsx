import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { CircularProgressBase } from "react-native-circular-progress-indicator";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type PerformanceHeaderProps = {
  grade?: string;
  percentage: number;
  comment?: string;
};
const PerformanceHeader: React.FC<PerformanceHeaderProps> = ({
  grade,
  percentage,
  comment,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const {
    palette: {
      decorative: { tertiary_mustard },
      background: { week_highlight_attendance_loader_bg },
    },
  } = theme;
  return (
    <Box style={styles.card}>
      <TextView variant="medium" style={styles.cardHeading}>
        {t("reportPage:overallPerformance")}
      </TextView>
      <HStack style={styles.container}>
        <CircularProgressBase
          value={percentage}
          activeStrokeColor={tertiary_mustard}
          inActiveStrokeColor={"transparent"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={15}
          activeStrokeWidth={16}
        >
          <TextView style={styles.progressText} variant="bold">
            {percentage}%
          </TextView>
        </CircularProgressBase>
        <Box style={styles.backgroundProgress}>
          <CircularProgressBase
            value={100 - percentage - 10}
            activeStrokeColor={week_highlight_attendance_loader_bg}
            inActiveStrokeColor={"transparent"}
            inActiveStrokeWidth={15}
            activeStrokeWidth={16}
            clockwise={false}
          ></CircularProgressBase>
        </Box>

        <Box style={styles.right}>
          <TextView variant="bold" style={styles.gradeText}>
            {grade} {t("reportPage:grade")}
          </TextView>
          <TextView variant="light" style={styles.remark}>
            {comment}
          </TextView>
        </Box>
      </HStack>
    </Box>
  );
};

export default PerformanceHeader;
