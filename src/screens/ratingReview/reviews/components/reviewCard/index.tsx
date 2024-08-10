import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle } from "react-native";
import { Box } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import RatingBar from "../ratingBar";
import { useStyles } from "./index.styles";

export type ReviewProps = {
  name?: string;
  subject?: string;
  rating?: number;
  profileImage?: string;
  onPress: () => void;
};
const ReviewCard: React.FC<ReviewProps> = ({
  name,
  subject,
  rating = 0,
  profileImage,
  onPress,
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  return (
    <Box style={styles.card}>
      <Image
        source={
          profileImage ? { uri: profileImage } : imageSources.reviewTeacherOne
        }
        style={styles.profile as ImageStyle}
      />
      <Box style={styles.right}>
        <Box>
          <TextView variant="medium" style={styles.title}>
            {name}
          </TextView>
          <TextView variant="light" style={styles.subjectTitle}>
            {subject}
          </TextView>
        </Box>
        <RatingBar rating={rating} />
        <PrimaryButton
          width={141}
          styleText={styles.btnText}
          title={t("reviewsPage:rateReview")}
          style={styles.btnRating}
          onPress={onPress}
        />
      </Box>
    </Box>
  );
};

export default ReviewCard;
