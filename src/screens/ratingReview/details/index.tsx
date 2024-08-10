import { Container } from "@common/components/Container";
import BottomButtons from "@common/components/bottomButtons";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, ScrollView, TextInput, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { Box, HStack, Spacer } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useStyles } from "./index.styles";
type Props = NativeStackScreenProps<
  SignedInStackParamList,
  "RatingReviewDetails"
>;
const RatingReviewDetails: React.FC<Props> = (props) => {
  const {
    route: {
      params: { own, rating },
    },
  } = props;
  const { styles, theme } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [rate, setRate] = useState(rating ? rating * 0.1 : 0.5);
  const { t } = useTranslation();

  return (
    <Container noSpacing>
      <View style={styles.container}>
        <Header
          scroll={scrollY}
          title={
            own
              ? t("detailsPage:navigationHeadingMyReview")
              : t("detailsPage:navigationHeadingRate")
          }
        />

        <ScrollView
          onScroll={handleScroll}
          contentContainerStyle={styles.contain}
          nestedScrollEnabled
        >
          {own ? (
            <Box>
              <TextView variant="medium" style={styles.name}>
                Teacher: Sheila Naomi
              </TextView>
              <TextView variant="light" style={styles.align}>
                Subject: Mathematics
              </TextView>
              <TextView variant="light" style={styles.date}>
                07/05/2023 • 09:00 AM
              </TextView>
            </Box>
          ) : (
            <HStack spacing={18}>
              <Image
                style={styles.profileImage as ImageStyle}
                source={imageSources.reviewTeacherOne}
              />
              <Box>
                <TextView variant="medium" style={styles.name}>
                  Sheila Naomi
                </TextView>
                <TextView variant="light" style={styles.subject}>
                  Mathematics
                </TextView>
              </Box>
            </HStack>
          )}

          <TextView style={styles.ratingText} variant="light">
            {own ? "Rating" : "Rating scale"}
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
            disabled={own}
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
          {own ? (
            <Box>
              <TextView variant="light" style={styles.paragraph}>
                He has shown tremendous growth and improvement. He actively
                participates in class discussions and ask insightful questions.
                The students creativity and critical thinking skills are
                exceptional. They are a valuable asset to the classroom and a
                pleasure to teach.
              </TextView>
              <Spacer mb={40} />
              <TextView variant="light" style={styles.align}>
                Points to improve
              </TextView>
              <Spacer mb={18} />
              <TextView variant="light" style={styles.align}>
                1. Improve time management skills
              </TextView>
              <TextView variant="light" style={styles.align}>
                2. Enhance active listening
              </TextView>
              <TextView variant="light" style={styles.align}>
                3. Strengthen organization skills
              </TextView>
              <TextView variant="light" style={styles.align}>
                4. Foster independent learning
              </TextView>
            </Box>
          ) : (
            <TextInput
              multiline
              placeholderTextColor={theme.palette.border.Attachment_field}
              style={styles.textArea}
              placeholder="Type..."
            />
          )}
        </ScrollView>
        {!own && (
          <BottomButtons
            onSecondaryButtonClick={() => props.navigation.goBack()}
            primaryButtonTitle={t("common:submit")}
          />
        )}
      </View>
    </Container>
  );
};

export default RatingReviewDetails;
