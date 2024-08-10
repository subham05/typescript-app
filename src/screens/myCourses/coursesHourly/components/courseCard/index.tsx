import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box, Flex, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type homeworkProps = {
  subject?: string;
  subjectTag?: string;
  dateFrom?: string;
  dateTo?: string;
  join?: boolean;
  joinAt?: string;
  icon?: ImageProps;
  session?: number;
  onPress?: () => void;
};
const CourseCard: React.FC<homeworkProps> = ({
  subject,
  subjectTag,
  join,
  dateFrom,
  dateTo,
  icon,
  session,
  joinAt,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
      <Box p={20} style={styles.card}>
        <Flex direction="row" style={styles.leftSide}>
          <Image style={styles.img as ImageStyle} source={icon} />
          <Box style={styles.infoBox}>
            <Flex direction="row" style={styles.titleContainer}>
              <TextView variant="medium" style={styles.subject}>
                {subject}
              </TextView>
              <TextView style={styles.tag}>{subjectTag}</TextView>
            </Flex>
            <TextView style={styles.session}>
              Sessions
              <TextView style={styles.numbSession}> {session}</TextView>
            </TextView>

            <TextView variant="regular" style={styles.date}>
              {dateFrom} - {dateTo}
            </TextView>
          </Box>
        </Flex>
        <VStack style={styles.joinContainer} spacing={16}>
          {join ? (
            <TouchableOpacity style={styles.ctaBtn}>
              <TextView variant="regular" style={styles.ctaText}>
                Join now
              </TextView>
            </TouchableOpacity>
          ) : (
            <TextView variant="medium" style={styles.statusText}>
              {joinAt}
            </TextView>
          )}
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default CourseCard;
