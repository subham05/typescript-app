import React from "react";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";

type RatingBarProps = {
  rating: number;
};

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
  const ratingWidth = (rating / 10) * 100;
  const { styles } = useStyles({});
  return (
    <HStack style={styles.ratingBar} spacing={7}>
      <Box style={styles.bar}>
        <Box
          style={[
            styles.barInner,
            rating < 8 && styles.average,
            rating < 5 && styles.bad,
            { width: `${ratingWidth}%` },
          ]}
        />
      </Box>
      <TextView variant="light" style={styles.number}>
        {rating}
      </TextView>
    </HStack>
  );
};

export default RatingBar;
