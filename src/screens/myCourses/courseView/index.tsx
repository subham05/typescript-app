import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import { TextView } from "@common/components/textView";
import { CommonModal } from "@common/components/modal";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, TouchableOpacity } from "react-native";
import { Box, Spacer } from "react-native-flex-layout";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import CourseViewCard from "./components/courseViewCard";
import SessionViewCard from "./components/sessionCard";
import { courseDetailsList, sessionList } from "./constants";
import { useStyles } from "./index.styles";
import ReviewCard from "./components/ratingCard";
type CourseViewProps = {
  navigation: NavigationProp<SignedInStackParamList>;
};
const CourseView: React.FC<CourseViewProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);

  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={t("courseViewPage:navigationHeading")} />
      <FlatList
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        data={courseDetailsList}
        ItemSeparatorComponent={() => <Spacer pb={32} />}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CourseViewCard
            title={item.title}
            subtitle={item.subtitle}
            thumbnail={item.thumbnail}
            review={item.review}
            onPress={() => setModalVisible1(true)}
          />
        )}
      />
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.primaryBtn}
        >
          <TextView variant="medium" style={styles.primaryTxt}>
            {t("courseViewPage:viewSession")}
          </TextView>
        </TouchableOpacity>
      </Box>
      <CommonModal
        style={styles.customModal}
        isModalVisible={isModalVisible}
        onPress={() => setModalVisible(false)}
      >
        <FlatList
          contentContainerStyle={styles.contain}
          data={sessionList}
          ItemSeparatorComponent={() => <Spacer pb={32} />}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <SessionViewCard
              session={item.session}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </CommonModal>
      <CommonModal
        style={styles.customModal}
        isModalVisible={isModalVisible1}
        onPress={() => setModalVisible1(false)}
        title="Rate and review"
      >
        <ReviewCard />
      </CommonModal>
    </Container>
  );
};

export default CourseView;
