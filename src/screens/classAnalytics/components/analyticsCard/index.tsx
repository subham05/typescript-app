import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type AnalyticsCardProp = {
  name?: string;
  onlineTime?: string;
  talkTime?: string;
  webcamTime?: string;
  raisedHand?: string;
  messages?: string;
  attendance?: string;
};
const AnalyticsCard: React.FC<AnalyticsCardProp> = ({
  name,
  attendance,
  onlineTime,
  talkTime,
  webcamTime,
  raisedHand,
  messages,
}) => {
  const { styles } = useStyles({});
  return (
    <VStack spacing={16} style={styles.card}>
      <HStack style={styles.top}>
        <TextView variant="medium" style={styles.title}>
          {name}
        </TextView>
        <TextView style={styles.status}>{attendance}</TextView>
      </HStack>
      <HStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Online time</TextView>
          <TextView>{onlineTime}</TextView>
        </VStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Talk time</TextView>
          <TextView>{talkTime}</TextView>
        </VStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Webcam time</TextView>
          <TextView>{webcamTime}</TextView>
        </VStack>
      </HStack>
      <HStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Raised hand</TextView>
          <HStack>
            <IconView name="Hand" size={18} />
            <TextView style={styles.bottomText}>{raisedHand}</TextView>
          </HStack>
        </VStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Messages</TextView>
          <HStack>
            <IconView name="message" size={18} />
            <TextView style={styles.bottomText}>{messages}</TextView>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default AnalyticsCard;
