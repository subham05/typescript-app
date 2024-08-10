import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Spacer } from "react-native-flex-layout";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import MainChats from "./components/mainChats";

import { PrimaryButton } from "@common/components/buttons/primaryButton";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import Animated from "react-native-reanimated";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { data } from "./constants";
import { useStyles } from "./index.styles";
type ChatScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};

const Chat: React.FC<ChatScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});
  const [parentSearch, setParentSearch] = useState("");
  const { scrollY, translateY, handleScroll } = UseScrollAnimation(62);
  const handleSearchChange = (text: string) => {
    setParentSearch(text);
  };

  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        navigationType="DRAWER"
        title={t("chatPage:navigationHeading")}
        RenderRightContainer={() => (
          <IconButton
            name="notification"
            onPress={() => navigation.navigate("Notification")}
            size={24}
            batchSHow={true}
          />
        )}
      />
      <Box>
        <StickyHeaderView currentOffset={translateY}>
          <Search
            autoFocus={false}
            search={parentSearch}
            onSearchChange={handleSearchChange}
          />
        </StickyHeaderView>
        <Animated.FlatList
          onScroll={handleScroll}
          contentContainerStyle={styles.containList}
          data={data}
          ItemSeparatorComponent={() => <Spacer pt={40} />}
          renderItem={({ item }) => (
            <MainChats
              onPress={() => navigation.navigate("Conversation")}
              heading={item.heading}
              data={item.value}
            />
          )}
        />
      </Box>
      <PrimaryButton
        title={"Add group"}
        style={styles.fab}
        iconProps={{ name: "Add" }}
        onPress={() => navigation.navigate("AddGroup")}
      />
    </Container>
  );
};

export default Chat;
