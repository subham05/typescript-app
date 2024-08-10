import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type EventsCardProps = {
  title?: string;
  date?: string;
  timeRange?: string;
  topic?: string;
  notes?: string;
  onPress: () => void;
};
const EventsCard: React.FC<EventsCardProps> = ({
  title,
  date,
  timeRange,
  topic,
  notes,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <VStack style={styles.card}>
      <TextView variant="medium" style={styles.head}>
        {title}
      </TextView>
      <TextView style={styles.time}>
        {date} • {timeRange}
      </TextView>
      <HStack pt={38} pb={28}>
        <IconView name="note1" size={24} />
        <Box pl={18}>
          <TextView style={styles.titleHead}>
            {t("upcomingEventsPage:topic")}
          </TextView>
          <TextView style={styles.info}>{topic}</TextView>
        </Box>
      </HStack>
      <HStack pb={32}>
        <IconView name="menu" size={24} />
        <Box pl={18}>
          <TextView style={styles.titleHead}>
            {t("upcomingEventsPage:notes")}
          </TextView>
          <TextView style={styles.info}>{notes}</TextView>
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

export default EventsCard;
