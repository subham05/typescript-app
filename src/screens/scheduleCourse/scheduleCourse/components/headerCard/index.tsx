import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack, VStack } from "react-native-flex-layout";
import RadioButton from "../radioButton";
import { useStyles } from "./index.styles";
export type HeaderProp = {
  handlePress: (num: number) => void;
  value?: number;
};
const HeaderCard: React.FC<HeaderProp> = ({ handlePress, value }) => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { primary_indigo },
    },
  } = theme;
  const handleSelect = (number: number) => {
    handlePress(number);
  };
  const radioOne = value === 1;
  const radioTwo = value === 2;
  return (
    <VStack spacing={26} style={styles.card}>
      <HStack>
        <Box style={styles.iconAdjust}>
          <IconView name="menu1" size={18} color={primary_indigo} />
        </Box>

        <TextView style={styles.head} variant="bold">
          View course details
        </TextView>
      </HStack>
      <VStack spacing={5}>
        <TextView style={styles.subtitle}>Course duration</TextView>
        <TextView style={styles.adjust}>23/05/2023 - 22/12/2023</TextView>
      </VStack>
      <VStack spacing={8}>
        <TextView style={styles.radioHeading}>
          Duplicate week’s calendar for timeframe
        </TextView>
        <HStack style={styles.radioSpace}>
          <RadioButton
            onPress={() => handleSelect(1)}
            check={radioOne}
            name="Yes"
          />
          <RadioButton
            onPress={() => handleSelect(2)}
            check={radioTwo}
            name="No"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default HeaderCard;
