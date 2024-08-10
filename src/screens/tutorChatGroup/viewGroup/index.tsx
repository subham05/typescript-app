import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, KeyboardAvoidingView } from "react-native";
import { Box, Flex, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import { imageSources } from "src/assets/images";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import GroupCard from "./components/groupCard";
import { groupList } from "./constants";
import { useStyles } from "./index.styles";
type GroupInfoScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};
const ViewGroup: React.FC<GroupInfoScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const { scrollY, handleScroll } = UseScrollAnimation(62);
  return (
    <Container noSpacing>
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
        <Header scroll={scrollY} title={t("groupInfoPage:navigationHeading")} />
        {/* <GroupInfoLoader /> */}
        <Animated.FlatList
          ListHeaderComponent={() => (
            <>
              <Box style={styles.center}>
                <Image
                  style={styles.groupImg as ImageStyle}
                  source={imageSources.chatDemo3}
                />
                <TextView style={styles.groupTitle} variant="medium">
                  Sports Group
                </TextView>
                <TextView style={styles.subText}>
                  {t("groupInfoPage:createdBy")} teacher
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
                <TextView style={styles.participants}>
                  24 {t("groupInfoPage:participants")}
                </TextView>

                <HStack spacing={20}>
                  <IconButton
                    onPress={() => navigation.navigate("AddMember")}
                    name="user1"
                    size={24}
                  />
                  <IconButton
                    onPress={() => setShow(!show)}
                    name={show ? "remove" : "search"}
                    size={24}
                  />
                </HStack>
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

export default ViewGroup;
