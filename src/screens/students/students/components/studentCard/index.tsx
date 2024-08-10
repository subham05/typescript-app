import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type homeworkProps = {
  name?: string;
  className?: string;
  tags?: string;
  joining?: string;
  fees?: string;
  profileImg?: ImageProps;
  onPress?: () => void;
};

const StudentCard: React.FC<homeworkProps> = ({
  name,
  className,
  tags,
  joining,
  fees,
  profileImg,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
      <Box p={20} style={styles.card}>
        <Flex direction="row" style={styles.leftSide}>
          <Image style={styles.img as ImageStyle} source={profileImg} />
          <Box style={styles.infoBox}>
            <Flex direction="row" style={styles.titleContainer}>
              <TextView variant="medium" style={styles.subject}>
                {name}
              </TextView>
              <TextView>{className}</TextView>
            </Flex>
            <TextView style={styles.tag}>{tags}</TextView>
            <TextView style={styles.session}>
              Joining date :
              <TextView style={styles.numbSession}> {joining}</TextView>
            </TextView>

            <TextView variant="regular" style={styles.date}>
              {fees}
            </TextView>
          </Box>
        </Flex>
      </Box>
    </TouchableOpacity>
  );
};

export default StudentCard;
