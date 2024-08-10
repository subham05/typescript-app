import { TextView } from "@common/components/textView";
import React from "react";
import { useStyles } from "./index.styles";
import { Box } from "react-native-flex-layout";
import { useTranslation } from "react-i18next";
import { formatDate } from "@common/utils/dateFormat";
type AgendaHeadProp = {
  classes: number;
  dateCurrent: Date;
};
const AgendaHead: React.FC<AgendaHeadProp> = ({ classes, dateCurrent }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const formattedDate = formatDate(dateCurrent);
  return (
    <Box style={styles.agendaHeader} pb={30}>
      <Box>
        <TextView variant="bold" style={styles.agendaHead}>
          {formattedDate}
        </TextView>
        <TextView style={styles.agendaSub}>
          {classes} {t("homePage:classesToday")}
        </TextView>
      </Box>
    </Box>
  );
};

export default AgendaHead;
