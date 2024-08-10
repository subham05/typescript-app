import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
interface headerProps {
  title: string;
  onPress?: () => void;
}
const ListHeader: React.FC<headerProps> = ({ title }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});

  return (
    <Box style={styles.resourceHeader} mt={8} ph={20}>
      <Box>
        <TextView variant="medium" style={styles.resourceHead}>
          {t(`resourcePage:${title}`)}
        </TextView>
      </Box>
      <TouchableOpacity>
        <TextView variant="medium" style={styles.all}>
          {t("common:viewAll")}
        </TextView>
      </TouchableOpacity>
    </Box>
  );
};

export default ListHeader;
