import { TextView } from "@common/components/textView";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack } from "react-native-flex-layout";
import { List, attendanceData, daysNames } from "../../constants";
import { useStyles } from "./index.styles";
import { DimensionValue } from "react-native";

const AttendanceHeader: React.FC = () => {
  const { styles } = useStyles({});
  const [change, setChange] = useState<string>();
  const { t } = useTranslation();
  return (
    <Box style={styles.card}>
      <HStack justify="between">
        <TextView variant="medium" style={styles.cardHeading}>
          {t("attendancePage:recentAttendance")}
        </TextView>
        <FilterDropdown
          data={List}
          placeholder={t("common:select")}
          value={change}
          onChange={(item) => {
            setChange(item.value);
          }}
        />
      </HStack>
      <HStack style={styles.graph} justify="between">
        {attendanceData.map((item) => (
          <Box key={item.index} style={styles.barContain}>
            <Box style={styles.bar}>
              <Box
                style={[
                  styles.width,
                  item.type == 1 && styles.presentBar,
                  item.type == 2 && styles.absentBar,
                  {
                    height: item.percentage as DimensionValue,
                  },
                ]}
              ></Box>
            </Box>
          </Box>
        ))}
      </HStack>
      <HStack justify="between" style={styles.days}>
        {daysNames.map((item) => (
          <TextView variant="light" key={item.index} style={styles.dayHeader}>
            {item.name}
          </TextView>
        ))}
      </HStack>
      <HStack justify="evenly">
        <HStack spacing={7} style={styles.demo}>
          <Box style={styles.round} />
          <TextView variant="light"> {t("attendancePage:present")}</TextView>
        </HStack>
        <HStack spacing={7} style={styles.demo}>
          <Box style={styles.roundAbsent} />
          <TextView variant="light">{t("attendancePage:absent")}</TextView>
        </HStack>
        <HStack spacing={7} style={styles.demo}>
          <Box style={styles.roundLate} />
          <TextView variant="light">{t("attendancePage:late")}</TextView>
        </HStack>
      </HStack>
    </Box>
  );
};

export default AttendanceHeader;
