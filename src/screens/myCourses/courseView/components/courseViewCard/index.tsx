import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { Image, ImageProps, ImageStyle } from "react-native";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
type CourseViewProps = {
  title: string;
  subtitle?: string;
  thumbnail?: ImageProps;
  review?: boolean;
  onPress: () => void;
};
const CourseViewCard: React.FC<CourseViewProps> = ({
  title,
  subtitle,
  thumbnail,
  review,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Flex direction="row" justify="between">
      <Box>
        <TextView style={styles.title}>{t(`courseViewPage:${title}`)}</TextView>
        {thumbnail ? (
          <Image style={styles.thumb as ImageStyle} source={thumbnail} />
        ) : (
          <TextView style={styles.subTitle}>{subtitle}</TextView>
        )}
      </Box>
      {review && (
        <PrimaryButton
          width={103}
          title={t("courseViewPage:rateReview")}
          style={styles.review}
          styleText={styles.reviewText}
          onPress={onPress}
        />
      )}
    </Flex>
  );
};

export default CourseViewCard;
