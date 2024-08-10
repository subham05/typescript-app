import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import BottomButtons from "@common/components/bottomButtons";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, ScrollView } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useGetHomeworkDetailQuery } from "src/store/services/homework";
import FileDownload from "../../../common/components/fileDownload";
import ViewHomeworkCard from "./components/viewHomeworkCard";
import { useStyles } from "./index.styles";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import DetailsLoader from "@common/components/skeletonLoaders/home";
type ViewHomeworkProps = {
  navigation: NavigationProp<
    SignedInStackParamList & SignedInStackPrivateParamList
  >;
};
const ViewHomeWork: React.FC<ViewHomeworkProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  // const fileUrl =
  //   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const { scrollY, handleScroll } = UseScrollAnimation();
  const { data, isLoading } = useGetHomeworkDetailQuery({
    homeworkId: "2",
  });
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("homeworkViewPage:navigationHeading")}
        RenderRightContainer={() => <IconButton name="share" size={24} />}
      />
      {isLoading ? (
        <DetailsLoader />
      ) : (
        <ScrollView
          onScroll={handleScroll}
          contentContainerStyle={styles.contain}
          nestedScrollEnabled
        >
          <Box ph={20} pv={32} style={styles.whiteCard}>
            <HStack spacing={16}>
              <Image
                style={styles.iconImage as ImageStyle}
                source={imageSources.homeworkDetails}
              />
              <Box style={styles.headingRight}>
                <TextView variant="medium" style={styles.heading}>
                  {data?.data?.title}
                </TextView>
                <TextView style={styles.time}>
                  Posted on : {data?.data?.postedTime}
                </TextView>
              </Box>
            </HStack>

            <VStack pt={46} style={styles.gap}>
              <ViewHomeworkCard
                title={"Subject"}
                subtitle={data?.data?.subject}
                index={1}
              />
              <ViewHomeworkCard
                title={"Submission date"}
                subtitle={data?.data?.submissionDate}
                index={2}
              />
              <ViewHomeworkCard
                title={"Notes"}
                subtitle={data?.data?.notes}
                index={3}
              />
              <FileDownload fileUrl={data?.data?.fileUrl} />
            </VStack>
          </Box>
        </ScrollView>
      )}

      <BottomButtons
        onSecondaryButtonClick={() => navigation.goBack()}
        primaryButtonTitle={t("homeworkViewPage:submitHomework")}
        onPrimaryButtonClick={() => navigation.navigate("SubmitHomeWork")}
        boxStyle={styles.boxStyle}
      />
    </Container>
  );
};

export default ViewHomeWork;
