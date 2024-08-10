import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { Image, ImageStyle } from "react-native";
import { imageSources } from "src/assets/images";

const GeneralView: React.FC = () => {
  const { styles } = useStyles({});
  return (
    <>
      <Image
        style={styles.profileBig as ImageStyle}
        source={imageSources.studentImageOne}
      />
      <VStack spacing={29} mt={36}>
        <HStack>
          <Box style={styles.nameCustom}>
            <TextView variant="light" style={styles.subtitle}>
              {"First name"}
            </TextView>
            <TextView style={styles.values}>Desirae</TextView>
          </Box>
          <Box style={styles.nameCustom}>
            <TextView variant="light" style={styles.subtitle}>
              {"Last name"}
            </TextView>
            <TextView style={styles.values}>Dokidis</TextView>
          </Box>
        </HStack>
        <Box>
          <TextView variant="light" style={styles.subtitle}>
            {"Email id"}
          </TextView>
          <TextView style={styles.values}>dianne.russel@mail.com</TextView>
        </Box>
        <Box>
          <TextView variant="light" style={styles.subtitle}>
            {"Contact number"}
          </TextView>
          <TextView style={styles.values}>(307) 555-0133</TextView>
        </Box>
        <Box>
          <TextView variant="light" style={styles.subtitle}>
            {"Alternate contact number"}
          </TextView>
          <TextView style={styles.values}>(307) 555-0133</TextView>
        </Box>
        <Box>
          <TextView variant="light" style={styles.subtitle}>
            {"Platform joining date"}
          </TextView>
          <TextView style={styles.values}>07/05/2023</TextView>
        </Box>
      </VStack>
    </>
  );
};

export default GeneralView;
