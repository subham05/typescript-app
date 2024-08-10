import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import Tab from "@common/components/topTabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import {
  useGetFeedbackQuery,
  useGetReviewsQuery,
} from "src/store/services/ratingReview";
import FeedbackCard from "./components/feedbackCard";
import ReviewCard from "./components/reviewCard";
import { useStyles } from "./index.styles";
import { ReviewTeacher } from "./types";
import RatingLoader from "@common/components/skeletonLoaders/ratingLoader";
type ReviewScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Reviews: React.FC<ReviewScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation(52);
  const [tab, setTab] = useState(1);
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };
  const { data, isLoading } = useGetReviewsQuery();
  const { data: feedbackData, isLoading: feedbackLoading } =
    useGetFeedbackQuery();
  const combinedData: ReviewTeacher[] =
    tab === 1 ? data?.data ?? [] : feedbackData?.data ?? [];
  const renderItem = ({ item }: { item: ReviewTeacher; index: number }) => {
    if (tab === 1) {
      return (
        <ReviewCard
          name={item.name}
          subject={item.subject}
          rating={item.rating}
          profileImage={item.thumbnail}
          onPress={() => {
            navigation.navigate("RatingReviewDetails", {
              own: false,
            });
          }}
        />
      );
    } else
      return (
        <FeedbackCard
          name={item.name}
          subject={item.subject}
          rating={item.rating}
          profileImage={item.thumbnail}
          onPress={() => {
            navigation.navigate("RatingReviewDetails", {
              own: true,
              rating: item.rating,
            });
          }}
          date={item.date}
        />
      );
  };

  return (
    <Container noSpacing>
      <Header
        title={t("reviewsPage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="search"
            size={24}
            onPress={() => navigation.navigate("Search")}
          />
        )}
      />
      <Tab
        tabLeftName={t("reviewsPage:reviewTeacher")}
        tabRightName={t("reviewsPage:feedback")}
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      {isLoading || feedbackLoading ? (
        <RatingLoader />
      ) : (
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          data={combinedData}
          renderItem={renderItem}
        />
      )}
    </Container>
  );
};

export default Reviews;
