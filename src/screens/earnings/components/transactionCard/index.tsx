import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type AnalyticsCardProp = {
  name?: string;
  type?: string;
  amountPaid?: string;
  transactionId?: string;
  adminShare?: string;
  tutorShare?: string;
  date?: string;
};

const TransactionCard: React.FC<AnalyticsCardProp> = ({
  name,
  type,
  amountPaid,
  transactionId,
  adminShare,
  tutorShare,
  date,
}) => {
  const { styles } = useStyles({});
  return (
    <VStack spacing={16} mh={20} style={styles.card}>
      <HStack style={styles.top}>
        <Box>
          <TextView variant="medium" style={styles.title}>
            {name}
          </TextView>
          <TextView style={styles.types}>{type}</TextView>
        </Box>
        <TextView style={styles.status}>{date}</TextView>
      </HStack>
      <HStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Amount paid</TextView>
          <TextView style={styles.align}>{amountPaid}</TextView>
        </VStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Transaction id </TextView>
          <TextView style={styles.align}>{transactionId}</TextView>
        </VStack>
      </HStack>
      <HStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Admin share</TextView>
          <TextView style={styles.align}>{adminShare}</TextView>
        </VStack>
        <VStack spacing={5} style={styles.column}>
          <TextView style={styles.smallTitle}>Tutor share</TextView>
          <TextView style={styles.align}>{tutorShare}</TextView>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default TransactionCard;
