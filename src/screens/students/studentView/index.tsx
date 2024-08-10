import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import AddressView from "./components/addressView";
import CoursesCard from "./components/coursesCard";
import GeneralView from "./components/generalView";
import Tab from "./components/tabs";
import { coursesList } from "./constants";
import { useStyles } from "./index.styles";

type StudentScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackParamList>,
    StackNavigationProp<SignedInStackPrivateParamList>
  >;
};
const StudentView: React.FC<StudentScreenProps> = () => {
  const { styles } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation(52);
  const [tab, setTab] = useState(1);
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };
  const renderTabContent = () => {
    switch (tab) {
      case 1:
        return <GeneralView />;
      // <StudentViewLoader />;
      case 2:
        return <AddressView />;
      case 3:
        return (
          <Animated.FlatList
            onScroll={handleScroll}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <Spacer p={8} />}
            data={coursesList}
            renderItem={({ item }) => (
              <CoursesCard
                title={item.title}
                thumb={item.thumb}
                joining={item.joining}
                ending={item.ending}
                subscriptionDate={item.subscriptionDate}
                fees={item.fees}
                transactionId={item.transactionId}
              />
            )}
          />
        );
      default:
        return null;
    }
  };
  return (
    <Container noSpacing>
      <Header title={"View students"} />
      <Tab
        tabLeftName="General"
        tabMiddleName="Address"
        tabRightName="Courses"
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      <FlatList
        contentContainerStyle={styles.containList}
        onScroll={handleScroll}
        data={[1]}
        renderItem={renderTabContent}
      />
    </Container>
  );
};

export default StudentView;
