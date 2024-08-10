import { TextView } from "@common/components/textView";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  ImageStyle,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import { useStyles } from "./index.styles";

const ReviewCard: React.FC = () => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const [rate, setRate] = useState(0.5);

  return (
    <>
      <ScrollView contentContainerStyle={styles.contain} nestedScrollEnabled>
        <HStack spacing={18}>
          <Image
            style={styles.profileImage as ImageStyle}
            source={imageSources.reviewTeacherOne}
          />
          <Box>
            <TextView variant="medium" style={styles.name}>
              Sheila Naomi
            </TextView>
            <TextView variant="light">Mathematics</TextView>
          </Box>
        </HStack>
        <TextView style={styles.ratingText} variant="light">
          Rating scale
        </TextView>
        <HStack mb={6} justify="between">
          <TextView variant="light" style={styles.numberRate}>
            0
          </TextView>
          <TextView variant="light" style={styles.numberRate}>
            10
          </TextView>
        </HStack>
        <Slider
          value={rate}
          step={0.1}
          minimumValue={0.0}
          minimumTrackTintColor={theme.palette.decorative.error_red}
          maximumValue={1.0}
          renderThumbComponent={() => (
            <Box style={styles.thumbBox}>
              <TextView variant="light" style={styles.textThumb}>
                {Math.round(rate * 10)}
              </TextView>
            </Box>
          )}
          minimumTrackStyle={styles.trackStyle}
          maximumTrackTintColor="transparent"
          onValueChange={(num) => setRate(num[0])}
        />
        <TextView style={styles.ratingText} variant="light">
          Review
        </TextView>
        <TextInput
          multiline
          placeholderTextColor={theme.palette.border.Attachment_field}
          style={styles.textArea}
          placeholder="Type..."
        />
      </ScrollView>
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {t("common:submit")}
          </TextView>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default ReviewCard;
