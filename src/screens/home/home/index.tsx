import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Box, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useAppSelector } from "src/store/hooks";
import AgendaCard from "./components/agendaCard";
import HomeCard from "./components/homeCard";
import PrivateHomeCard from "./components/privateHomeCard";
import WelcomeCard from "./components/welcomeCard";
import { agendaList, ctaList, ctaListPrivate } from "./constants";
import { useStyles } from "./index.styles";
import { useGetProfileQuery } from "src/store/services/profile";
import HomeLoader from "@common/components/skeletonLoaders/homeLoader";
type HomeScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const authContextState = useAppSelector((state) => state.authReducer);
  const { signType } = authContextState;
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const PRIVATE = "private";
  const { data: profileData, isLoading } = useGetProfileQuery();
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        navigationType="DRAWER"
        title={t("homePage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="notification"
            onPress={() => navigation.navigate("Notification")}
            size={24}
            batchSHow={true}
          />
        )}
      />
      {isLoading ? (
        <HomeLoader />
      ) : (
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.container}
          ListHeaderComponent={() => (
            <>
              <WelcomeCard name={profileData?.data.firstName} />
              <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={signType === PRIVATE ? ctaListPrivate : ctaList}
                horizontal
                contentContainerStyle={styles.topCtas}
                ItemSeparatorComponent={() => <Spacer ph={8} />}
                renderItem={({ item }) =>
                  signType === PRIVATE ? (
                    <PrivateHomeCard
                      title={t(`homePage:${item.title}`)}
                      thumbnail={item.thumbnail}
                      start={item.startColor}
                      end={item.endColor}
                      navigate={item.navigate}
                    />
                  ) : (
                    <HomeCard
                      title={t(`homePage:${item.title}`)}
                      thumbnail={item.thumbnail}
                      start={item.startColor}
                      end={item.endColor}
                      navigate={item.navigate}
                    />
                  )
                }
              />
              <Box style={styles.agendaHeader} mt={38} ph={22} pb={15}>
                <Box>
                  <TextView variant="bold" style={styles.agendaHead}>
                    {t("homePage:subHeader")}
                  </TextView>
                  <TextView style={styles.agendaSub}>
                    5 {t("homePage:classesToday")}
                  </TextView>
                </Box>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Calendar");
                  }}
                >
                  <TextView variant="bold" style={styles.all}>
                    {t("common:viewAll")}
                  </TextView>
                </TouchableOpacity>
              </Box>
            </>
          )}
          data={[1]}
          renderItem={() => (
            <Box p={23} style={styles.agendaContain}>
              <Animated.FlatList
                data={agendaList}
                renderItem={({ item, index }) => (
                  <AgendaCard
                    index={index}
                    subject={item.subject}
                    timeStart={item.startTime}
                    timeEnd={item.endTime}
                    thumbnail={item.thumbnail}
                    joinTime={item.joinAt}
                    join={item.join}
                    completed={item.completed}
                    completedTime={item.completedTime}
                  />
                )}
              />
            </Box>
          )}
        />
      )}
    </Container>
  );
};

export default Home;
