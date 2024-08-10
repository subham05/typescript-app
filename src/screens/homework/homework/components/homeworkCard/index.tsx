import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Flex, VStack } from "react-native-flex-layout";
import SVGComponents from "src/assets/svg";
import { useStyles } from "./index.styles";
export type homeworkProps = {
  subject?: string;
  subjectTag?: string;
  status?: string;
  submissionDate?: string;
  join?: boolean;
  onPress?: () => void;
};
const HomeworkCard: React.FC<homeworkProps> = ({
  subject,
  subjectTag,
  status,
  join,
  submissionDate,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
      <Box ph={14} pv={20} style={styles.card}>
        <Flex direction="row" style={styles.leftSide}>
          <Box style={styles.img}>
            <SVGComponents.SubjectImg />
          </Box>
          <Box style={styles.infoBox}>
            <Flex pb={4} pt={4}>
              <TextView variant="medium" style={styles.subject}>
                {subject}
              </TextView>
            </Flex>
            <Flex pb={4} direction="row">
              <TextView style={styles.session}>{subjectTag}</TextView>
            </Flex>

            <TextView variant="regular" style={styles.date}>
              Submission date:{submissionDate}
            </TextView>
          </Box>
        </Flex>
        <VStack style={styles.rightSide} spacing={16}>
          {join && (
            <TouchableOpacity style={styles.ctaBtn}>
              <TextView variant="regular" style={styles.ctaText}>
                Join now
              </TextView>
            </TouchableOpacity>
          )}
          <TextView variant="medium" style={styles.statusText}>
            {status}
          </TextView>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default HomeworkCard;
