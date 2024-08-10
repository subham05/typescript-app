import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box, Flex, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import ToggleSwitch from "@common/components/toggleSwitch";
export type QuizCardProps = {
  subject?: string;
  subjectTag?: string;
  status?: boolean;
  submissionDate?: string;
  start?: boolean;
  startAt?: string;
  completed?: boolean;
  onPress?: () => void;
  thumbnail?: ImageProps;
  name?: string;
  date?: string;
  submitStatus?: string;
  profilePic?: ImageProps;
  onNavigation?: () => void;
};
const QuizCard: React.FC<QuizCardProps> = ({
  subject,
  subjectTag,
  submissionDate,
  thumbnail,
  status,
  startAt,
  start,
  completed,
  date,
  name,
  submitStatus,
  profilePic,
  onPress,
  onNavigation,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onNavigation}>
      <Box ph={20} pv={26} style={styles.card}>
        <Flex direction="row" style={styles.leftSide}>
          <Image
            style={
              [styles.img, profilePic && styles.profileStyle] as ImageStyle
            }
            source={thumbnail ? thumbnail : profilePic}
          />
          <Box style={styles.infoBox}>
            <Flex pb={4}>
              <TextView variant="medium" style={styles.subject}>
                {subject ? subject : name}
              </TextView>
            </Flex>
            <Box pb={4}>
              {subjectTag && (
                <TextView style={styles.session}>{subjectTag}</TextView>
              )}
              {completed !== undefined && (
                <TextView style={styles.session}>
                  {completed ? "Completed" : "Ongoing"}
                </TextView>
              )}
            </Box>
            {submissionDate && (
              <TextView variant="regular" style={styles.date}>
                Submission date:{submissionDate}
              </TextView>
            )}
            {startAt && (
              <TextView variant="regular" style={styles.date}>
                Started at:{startAt}
              </TextView>
            )}
            {date && (
              <TextView variant="regular" style={styles.date}>
                Date & time:{date}
              </TextView>
            )}
          </Box>
        </Flex>
        <VStack style={styles.rightSide}>
          {status != undefined && (
            <ToggleSwitch check={status} onPress={onPress} />
          )}
          {start && (
            <TouchableOpacity style={styles.ctaBtn}>
              <TextView variant="regular" style={styles.ctaText}>
                Start now
              </TextView>
            </TouchableOpacity>
          )}
          {submitStatus && (
            <TextView variant="regular" style={styles.date}>
              {submitStatus}
            </TextView>
          )}
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default QuizCard;
