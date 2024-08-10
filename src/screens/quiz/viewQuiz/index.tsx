import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import { IconButton } from "@common/components/IconButton";
import { TextView } from "@common/components/textView";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import FileDownload from "../../../common/components/fileDownload";
import ViewQuizCard from "./components/quizCard";
import { quizList } from "./constants";
import { useStyles } from "./index.styles";

type Props = NativeStackScreenProps<SignedInStackPrivateParamList, "ViewQuiz">;
const ViewQuiz: React.FC<Props> = (props) => {
  const {
    route: {
      params: { view },
    },
  } = props;
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const fileUrl = "https://www.africau.edu/images/default/sample.pdf";
  const { scrollY, handleScroll } = UseScrollAnimation();
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t(
          view
            ? "viewQuizPage:navigationHeading1"
            : "viewQuizPage:navigationHeading"
        )}
        RenderRightContainer={() => {
          return view ? undefined : <IconButton name="share" size={24} />;
        }}
      />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        {view ? (
          <VStack spacing={40}>
            <TextView style={styles.timing}>
              Monday, 9 April • 08:00 AM - 09:00 AM
            </TextView>
            <HStack spacing={8}>
              <Box style={styles.activeIcon}>
                <Box style={styles.dot} />
              </Box>
              <TextView>{t("viewQuizPage:active")}</TextView>
            </HStack>
            <VStack spacing={10}>
              <TextView style={styles.title}>
                {t("viewQuizPage:quizType")}
              </TextView>
              <TextView style={styles.subTitle}>Live</TextView>
            </VStack>
            <VStack spacing={10}>
              <TextView style={styles.title}>
                {t("viewQuizPage:quizTitle")}
              </TextView>
              <TextView style={styles.subTitle}>
                Quiz on pythagoras theorem
              </TextView>
            </VStack>
            <VStack spacing={10}>
              <TextView style={styles.title}>
                {t("viewQuizPage:attachedFiles")}
              </TextView>
              <FileDownload fileUrl={fileUrl} />
            </VStack>
            <VStack spacing={10}>
              <TextView style={styles.title}>
                {t("viewQuizPage:notes")}
              </TextView>
              <TextView style={styles.subTitle}>
                @all students, we were completed the the third unit of your
                course. Solve all the equations which are given on page no 60. I
                have attached the copy as well for your reference.
              </TextView>
            </VStack>
          </VStack>
        ) : (
          <Box ph={20} pv={32} style={styles.whiteCard}>
            <HStack spacing={16}>
              <Box style={styles.headingRight}>
                <TextView variant="medium" style={styles.heading}>
                  Rise of titans and their war - questions and answers
                </TextView>
                <TextView style={styles.time}>
                  Posted on : 05/05/2023, 02:40 PM
                </TextView>
              </Box>
            </HStack>
            <VStack pt={46} style={styles.gap}>
              {quizList.map((item) => (
                <ViewQuizCard
                  key={item.index.toString()}
                  title={item.title}
                  subtitle={item.subtitle}
                  index={item.index}
                />
              ))}
              <FileDownload fileUrl={fileUrl} />
            </VStack>
          </Box>
        )}
      </ScrollView>
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {view
              ? `${t("common:startAt")} 09:00 AM`
              : t("viewQuizPage:submitQuiz")}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default ViewQuiz;
