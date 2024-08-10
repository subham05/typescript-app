import { TextView } from "@common/components/textView";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type CoursesProps = {
  title?: string;
  joining?: string;
  ending?: string;
  subscriptionDate?: string;
  fees?: string;
  transactionId?: string;
  thumb?: ImageProps;
  onPress?: () => void;
};

const CoursesCard: React.FC<CoursesProps> = ({
  title,
  joining,
  ending,
  subscriptionDate,
  fees,
  transactionId,
  thumb,
  onPress,
}) => {
  const { styles } = useStyles({});
  return (
    <TouchableOpacity onPress={onPress}>
      <Box p={20} style={styles.card}>
        <Flex direction="row" style={styles.leftSide}>
          <Image style={styles.img as ImageStyle} source={thumb} />
          <Box style={styles.infoBox}>
            <TextView variant="medium" style={styles.subject}>
              {title}
            </TextView>
            <TextView style={styles.fee}>{fees}</TextView>
            <TextView style={styles.date}>
              {joining} - {ending}
            </TextView>
            <TextView style={styles.session}>
              Subscription date :
              <TextView style={styles.numbSession}>{subscriptionDate}</TextView>
            </TextView>

            <TextView variant="regular" style={styles.date}>
              Transaction id : {transactionId}
            </TextView>
          </Box>
        </Flex>
      </Box>
    </TouchableOpacity>
  );
};

export default CoursesCard;
