import { TextView } from "@common/components/textView";
import React from "react";
import { Box, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

const AddressView: React.FC = () => {
  const { styles } = useStyles({});
  return (
    <VStack spacing={29} mt={6}>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"House no/block no"}
        </TextView>
        <TextView style={styles.values}>2972</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"Building/street/area"}
        </TextView>
        <TextView style={styles.values}>Westheimer Rd</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"Landmark"}
        </TextView>
        <TextView style={styles.values}>Santa ana</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"Country"}
        </TextView>
        <TextView style={styles.values}>USA</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"Province"}
        </TextView>
        <TextView style={styles.values}>New Jersey</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"City"}
        </TextView>
        <TextView style={styles.values}>Jersey</TextView>
      </Box>
      <Box>
        <TextView variant="light" style={styles.subtitle}>
          {"Zip code"}
        </TextView>
        <TextView style={styles.values}>45463</TextView>
      </Box>
    </VStack>
  );
};

export default AddressView;
