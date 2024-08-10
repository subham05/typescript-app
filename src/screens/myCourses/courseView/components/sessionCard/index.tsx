import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type SessionViewProps = {
  session: number;
  title: string;
  description?: string;
};
const SessionViewCard: React.FC<SessionViewProps> = ({
  session,
  title,
  description,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <VStack spacing={32}>
      <TextView variant="medium" style={styles.head}>
        {t("courseViewPage:session")} {session}:
      </TextView>
      <Box>
        <TextView style={styles.title}>{t("courseViewPage:title")}</TextView>
        <TextView style={styles.subTitle}>{title}</TextView>
      </Box>
      <Box>
        <TextView style={styles.title}>
          {t("courseViewPage:description")}
        </TextView>
        <TextView style={styles.subTitle}>{description}</TextView>
      </Box>
    </VStack>
  );
};

export default SessionViewCard;
