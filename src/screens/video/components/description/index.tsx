import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Wrap } from "react-native-flex-layout";

import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { useStyles } from "./index.styles";
import { useTranslation } from "react-i18next";
interface DescriptionProps {
  title?: string;
  description?: string;
  otherDetails?: string;
  type?: "DOWNLOAD" | "Q&A";
  share?: () => void;
  onPress?: () => void;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  description,
  otherDetails,
  type,
  share,
  onPress,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box pl={16} pt={6} pr={16} pb={16}>
      <TextView variant="medium" style={styles.mainTitle}>
        {title}
      </TextView>
      <TextView style={styles.descTitle}>{description}</TextView>
      <TextView style={styles.otherDetails}>{otherDetails}</TextView>
      <Wrap direction="row" spacing={12}>
        <TouchableOpacity onPress={share} style={styles.share}>
          <IconView name="share" size={20} color={theme.palette.icon.Default} />
          <TextView style={styles.shareText}>{t("videoPage:share")}</TextView>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.download}>
          <IconView
            name={type === "Q&A" ? "reports" : "download"}
            size={20}
            color={theme.palette.icon.Default}
          />
          <TextView style={styles.shareText}>
            {t(`videoPage:${type === "Q&A" ? "questionAnswer" : "download"}`)}
          </TextView>
        </TouchableOpacity>
      </Wrap>
      <TextView style={styles.other}>{t("videoPage:otherVideos")}</TextView>
    </Box>
  );
};

export default Description;
