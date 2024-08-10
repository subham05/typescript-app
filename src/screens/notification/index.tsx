import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import NotificationCard from "./components/notificationCard";
import { notificationList } from "./constants";
import { useStyles } from "./index.styles";
type NotificationScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Notification: React.FC<NotificationScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();

  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("notificationPage:navigationHeading")}
      />
      {/* <NotificationLoader/> */}
      <Animated.FlatList
        onScroll={handleScroll}
        data={notificationList}
        contentContainerStyle={styles.listContain}
        ItemSeparatorComponent={() => <Spacer pb={12} />}
        renderItem={({ item }) => (
          <NotificationCard
            thumbnail={item.thumbnail}
            messageHighlight={item.messageHighlight}
            onPress={() => {}}
            join={item.join}
            view={item.view}
            time={item.time}
            message={item.message}
          />
        )}
      />
    </Container>
  );
};

export default Notification;
