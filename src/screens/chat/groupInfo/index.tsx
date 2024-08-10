import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, KeyboardAvoidingView } from "react-native";
import { Box, Flex, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { imageSources } from "src/assets/images";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import GroupCard from "./components/groupCard";
import Search from "./components/search";
import { groupList } from "./constants";
import { useStyles } from "./index.styles";
type GroupInfoScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const GroupInfo: React.FC<GroupInfoScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const [parentSearch, setParentSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleSearchChange = (text: string) => {
    setParentSearch(text);
  };
  const { scrollY, handleScroll } = UseScrollAnimation(62);
  return (
    <Container noSpacing>
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
        <Header scroll={scrollY} title={t("groupInfoPage:navigationHeading")} />
        <Animated.FlatList
          ListHeaderComponent={() => (
            <>
              <Box style={styles.center}>
                <Image
                  style={styles.groupImg as ImageStyle}
                  source={imageSources.chatDemo3}
                />
                <TextView style={styles.groupTitle} variant="medium">
                  Mathematics 3A
                </TextView>
                <TextView style={styles.subText}>
                  {t("groupInfoPage:createdBy")} default
                </TextView>
              </Box>

              <Flex
                pt={60}
                pb={15}
                mb={20}
                direction="row"
                justify="between"
                style={styles.search}
              >
                {show ? (
                  <Search
                    search={parentSearch}
                    onSearchChange={handleSearchChange}
                  />
                ) : (
                  <TextView style={styles.participants}>
                    24 {t("groupInfoPage:participants")}
                  </TextView>
                )}
                <IconButton
                  onPress={() => setShow(!show)}
                  name={show ? "remove" : "search"}
                  size={24}
                />
              </Flex>
            </>
          )}
          onScroll={handleScroll}
          keyExtractor={(_, index) => index.toString()}
          data={groupList}
          contentContainerStyle={styles.containList}
          ItemSeparatorComponent={() => <Spacer pt={24} />}
          renderItem={({ item }) => (
            <GroupCard image={item.thumbnail} name={item.name} />
          )}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default GroupInfo;
