import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageStyle, TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import RatingBar from "../ratingBar";
import { useStyles } from "./index.styles";

export type FeedbackProps = {
  name?: string;
  subject?: string;
  rating?: number;
  profileImage?: string;
  date?: string;
  onPress: () => void;
};

const FeedbackCard: React.FC<FeedbackProps> = ({
  name,
  subject,
  rating = 0,
  profileImage,
  date,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
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
        </Box>
        <TextView variant="light" style={styles.date}>
          {date}
        </TextView>
      </Box>
    </TouchableOpacity>
  );
};

export default FeedbackCard;
