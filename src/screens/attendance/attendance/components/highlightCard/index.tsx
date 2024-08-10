import React from "react";
import { useTranslation } from "react-i18next";
import LinearGradient from "react-native-linear-gradient";
import { useStyles } from "./index.styles";
import { HStack } from "react-native-flex-layout";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
type AgendaHeadProp = {
  value?: number;
  type?: "HOUR" | "ATTENDANCE";
};
const HighlightCard: React.FC<AgendaHeadProp> = ({
  type = "HOUR",
  value = 0,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const {
    palette: {
      background: { section_bg },
    },
    gradient: { greetings, mustard },
  } = theme;
  return (
    <LinearGradient
      colors={
        type == "HOUR"
          ? [greetings.start, greetings.end]
          : [mustard.start, mustard.end]
      }
      style={styles.card}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <HStack style={styles.top}>
        <IconView
          name={type == "HOUR" ? "calendar" : "checkmark_badge"}
          size={24}
          color={section_bg}
        />
        <TextView variant="medium" style={styles.title}>
          {type == "HOUR"
            ? t("attendanceCalendarPage:titleHour")
            : t("attendanceCalendarPage:titleAttendance")}
        </TextView>
      </HStack>
      <TextView variant="medium" style={styles.value}>
        {value}
        {type == "ATTENDANCE" && (
          <TextView variant="medium" style={styles.percent}>
            %
          </TextView>
        )}
      </TextView>
    </LinearGradient>
  );
};

export default HighlightCard;
